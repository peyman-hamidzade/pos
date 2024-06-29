from django.urls import path
from .views import order_create

urlpatterns = [
    path('orders/create/', order_create, name='order-create'),
]
