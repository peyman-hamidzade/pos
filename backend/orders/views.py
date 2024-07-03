from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer, OrderStatusSerializer
from main.models import Product

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def order_create(request):
    order_data = request.data.get('order')
    order_data["user"] = request.user.id
    order_items_data = request.data.get('order_items')
    order_serializer = OrderSerializer(data=order_data, context={'request': request})

    if order_serializer.is_valid():
        order = order_serializer.save()

        for item_data in order_items_data:
            product_id = item_data.get('id')
            product = get_object_or_404(Product, id=product_id)
            
            order_item_data = {
                'order': order.id,
                'product': product.id,
                'price': item_data['price'],
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
