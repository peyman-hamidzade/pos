from django.urls import path
from .views import all_products, services, faq, ticket, product_detail, comments, validate_coupon

urlpatterns = [
    path('products/',all_products ,name='all_products'),
    path('services/',services ,name='services'),
    path('faq/',faq ,name='faq'),
    path('ticket/',ticket ,name='ticket'),
    path('product/<slug:slug>/', product_detail, name='product_detail'),
    path('products/<slug:slug>/comments/', comments, name='comments'),
    path('validate/', validate_coupon, name='validate_coupon'),
]
