from django.db import models
from main.models import Product
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from .tasks import send_status_sms
from dirtyfields import DirtyFieldsMixin


User = get_user_model()

class Order(DirtyFieldsMixin, models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(default=None)
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=250)
    postal_code = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    discount = models.FloatField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    paid = models.BooleanField(default=False)
    class OrderStatus(models.TextChoices):
        PENDING = 'pending', _('درحال بررسی')  # default
        REGISTERING_POS = 'registering_pos', _('درحال ثبت کارتخوان')
        SHIPPED = 'shipped', _('ارسال شده')
        DELIVERED = 'delivered', _('تحویل داده شده')

    status = models.CharField(
        max_length=20,
        choices=OrderStatus.choices,
        default=OrderStatus.PENDING,
    )

    class Meta:
        ordering = ['-created']
        indexes = [
        models.Index(fields=['-created']),
        ]

    def __str__(self):
        return f'Order {self.id}'
    
    

class OrderItem(models.Model):
    order = models.ForeignKey(Order,
                                related_name='items',
                                on_delete=models.CASCADE)
    product = models.ForeignKey(Product,
                                related_name='order_items',
                                on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10,
                                decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return str(self.id)
    
    def get_cost(self):
        return self.price * self.quantity


@receiver(post_save, sender=Order)
def send_order_status_sms(sender, instance, **kwargs):
    if 'status' in instance.get_dirty_fields():
        status = instance.get_status_display()
        send_status_sms.delay(instance.phone_number, status)