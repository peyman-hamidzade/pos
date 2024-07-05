from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Order
from .serializers import OrderSerializer, OrderItemSerializer, OrderStatusSerializer
from main.models import Product
from django.db import transaction

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
        "total": request.data.get('total')
    }

    order_serializer = OrderSerializer(data=order_data, context={'request': request})

    if order_serializer.is_valid():
        order = order_serializer.save()

        backend_total = 0

        for item_data in order_items_data:
            product_id = item_data.get('id')
            product = get_object_or_404(Product, id=product_id)

            if product.price != item_data['price']:
                order.delete()
                return Response({"error": "Product price mismatch."}, status=status.HTTP_400_BAD_REQUEST)

            backend_total += product.price * item_data['quantity']

        if backend_total != order_data['total']:
            order.delete()
            return Response({"error": "Total price mismatch."}, status=status.HTTP_400_BAD_REQUEST)

        for item_data in order_items_data:
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

        return Response(order_serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
