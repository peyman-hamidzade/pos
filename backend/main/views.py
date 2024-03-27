from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Services, Faq, Ticket
from .serializers import ProductSerializer, ServiceSerializer, FaqSerializer, TicketSerializer

@api_view(['GET'])
def all_products(request):
    try:
        products = Product.objects.all()
        products_serializer = ProductSerializer(products, many=True)

        return Response(products_serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def services(request):
    try:
        services = Services.objects.all()
        services_serializer = ServiceSerializer(services, many=True)

        return Response(services_serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def faq(request):
    try:
        faq = Faq.objects.all()
        faq_serializer = FaqSerializer(faq, many=True)

        return Response(faq_serializer.data, status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def ticket(request):
    if request.method == 'POST':
        ticket_serializer = TicketSerializer(data=request.data)
        if ticket_serializer.is_valid():
            ticket_serializer.save()

            return Response({"message":"پیام شما با موفقیت ثبت شد."}, status=status.HTTP_201_CREATED)
        return Response(ticket_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

