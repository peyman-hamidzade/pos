from django.urls import path
from .views import all_products, services, faq, ticket

urlpatterns = [
    path('products/',all_products ,name='all_products'),
    path('services/',services ,name='services'),
    path('faq/',faq ,name='faq'),
    path('ticket/',ticket ,name='ticket'),
]