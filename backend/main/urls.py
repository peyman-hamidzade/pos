from django.urls import path
from .views import all_products, services

urlpatterns = [
    path('products/',all_products ,name='all_products'),
    path('services/',services ,name='services'),
]