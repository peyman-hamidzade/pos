from django.urls import path
from .views import order_create, list_order_status

urlpatterns = [
    path('orders/create/', order_create, name='order-create'),
    path('order-status/', list_order_status, name='order-status'),
]
