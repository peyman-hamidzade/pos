from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Services, Faq, Ticket, Comment
from .serializers import ProductSerializer, ServiceSerializer, FaqSerializer, TicketSerializer, CommentSerializer



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


@api_view(['GET'])
def product_detail(request, slug):
    try:
        product = Product.objects.get(slug=slug)
        similar_products = Product.objects.filter(category=product.category).exclude(slug=product.slug)
        
        product_serializer = ProductSerializer(product)
        similar_products_serializer = ProductSerializer(similar_products, many=True)
        
        response_data = {
            "product": product_serializer.data,
            "similar_products": similar_products_serializer.data
        }
        
        return Response(response_data, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response(None, status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET', 'POST'])
def comments(request, slug):
    try:
        product = Product.objects.get(slug=slug)
    except Product.DoesNotExist:
        return Response({"message": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        return create_comment(request, product)
    elif request.method == 'GET':
        return list_comments(product, slug)
    else:
        return Response({"message": "Invalid method"}, status=status.HTTP_400_BAD_REQUEST)

def create_comment(request, product):
    request.data['product'] = product.id
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def list_comments(product, slug):
    try:
        comments = Comment.objects.filter(product=product, active=True).order_by('-created')
        comment_count = Comment.objects.filter(product__slug=slug, active=True).count()
        comments_serializer = CommentSerializer(comments, many=True)
        return Response({"comments": comments_serializer.data, "comment_count": comment_count}, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response({"message": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"message": "Error occurred while fetching comments"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

