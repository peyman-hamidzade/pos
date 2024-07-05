from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Order
from .serializers import OrderSerializer, OrderItemSerializer, OrderStatusSerializer
from main.models import Product, Coupon
from django.db import transaction
from decimal import Decimal


def validate_coupon(coupon_code):
    try:
        coupon = Coupon.objects.get(code=coupon_code, is_active=True)
        return coupon
    except Coupon.DoesNotExist:
        return None

def calculate_total(order_items_data):
    total = Decimal(0)
    for item_data in order_items_data:
        product_id = item_data.get('id')
        product = get_object_or_404(Product, id=product_id)

        if product.price != item_data['price']:
            return None, {"error": "قیمت محصولات با هم مطابقت ندارد."}
        
        total += Decimal(product.price * item_data['quantity'])
    return total, None

def apply_discount(total, discount):
    total_decimal = Decimal(total)
    discount_decimal = Decimal(discount)
    return total_decimal - (total_decimal * discount_decimal / Decimal(100))

def save_order_items(order, order_items_data):
    for item_data in order_items_data:
        product = get_object_or_404(Product, id=item_data['id'])

        order_item_data = {
            'order': order.id,
            'product': product.id,
            'price': product.price,
            'quantity': item_data['quantity']
        }

        order_item_serializer = OrderItemSerializer(data=order_item_data)

        if order_item_serializer.is_valid():
            order_item_serializer.save()
        else:
            order.delete()
            return Response(order_item_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return None

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@transaction.atomic
def order_create(request):
    order_items_data = request.data.get('order_items')

    order_data = {
        "user": request.user.id,
        "first_name": request.data.get('first_name'),
        "last_name": request.data.get('last_name'),
        "email": request.data.get('email'),
        "phone_number": request.data.get('phone_number'),
        "address": request.data.get('address'),
        "postal_code": request.data.get('postal_code'),
        "city": request.data.get('city'),
        "discount": request.data.get('discount', 0),
        "total": request.data.get('total'),
        "coupon": request.data.get('coupon')
    }

    order_serializer = OrderSerializer(data=order_data, context={'request': request})

    if not order_serializer.is_valid():
        return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    coupon_code = order_data.get('coupon')
    coupon_discount = 0

    if coupon_code:
        coupon = validate_coupon(coupon_code)
        if not coupon:
            return Response({"error": "کد تخفیف یافت نشد."}, status=status.HTTP_400_BAD_REQUEST)
        coupon_discount = coupon.discount

    backend_total, error_response = calculate_total(order_items_data)
    if error_response:
        return Response(error_response, status=status.HTTP_400_BAD_REQUEST)

    if coupon_code:
        expected_total = apply_discount(backend_total, coupon_discount)
    else:
        expected_total = backend_total

    if expected_total != Decimal(order_data['total']):
        return Response({"error": "مجموع قیمت ها با هم مطابقت ندارد."}, status=status.HTTP_400_BAD_REQUEST)

    order = order_serializer.save(discount=coupon_discount, total=expected_total)

    error_response = save_order_items(order, order_items_data)
    if error_response:
        return error_response

    return Response(order_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_order_status(request):
    try:
        user = request.user
        order_items = Order.objects.filter(user=user)
        if not order_items.exists():
            return Response({'message': 'شما هیچ سفارش ثبت شده ای ندارید .'}, status=status.HTTP_404_NOT_FOUND)
        order_serializer = OrderStatusSerializer(order_items, many=True)
        return Response(order_serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
