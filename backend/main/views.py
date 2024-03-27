from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Services, Faq
from .serializers import ProductSerializer, ServiceSerializer, FaqSerializer

@api_view(['GET'])
def all_products(request):
    if request.method == 'GET':
        products = Product.objects.all()
        products_serializer = ProductSerializer(products, many=True)

        return Response(products_serializer.data, status.HTTP_200_OK)
    return Response(None, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def services(request):
    if request.method == 'GET':
        services = Services.objects.all()
        services_serializer = ServiceSerializer(services, many=True)

        return Response(services_serializer.data, status.HTTP_200_OK)
    return Response(None, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def faq(request):
    if request.method == 'GET':
        faq = Faq.objects.all()
        faq_serializer = FaqSerializer(faq, many=True)

        return Response(faq_serializer.data, status.HTTP_200_OK)
    return Response(None, status.HTTP_400_BAD_REQUEST)