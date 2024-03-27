from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer

@api_view(['GET'])
def all_products(request):
    if request.method == 'GET':
        products = Product.objects.all()
        products_serializer = ProductSerializer(products, many=True)

        return Response(products_serializer.data, status.HTTP_200_OK)
    return Response(None, status.HTTP_400_BAD_REQUEST)