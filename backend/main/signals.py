import logging
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Coupon
from .tasks import send_coupon_sms
from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)

@receiver(post_save, sender=Coupon)
def send_coupon_sms_on_creation(sender, instance, created, **kwargs):
    if created:
        logger.info(f'Coupon created: {instance.code}')
        verified_users = User.objects.filter(is_phone_verified=True).exclude(phone_number__isnull=True).exclude(phone_number__exact='')
        for user in verified_users:
            logger.info(f'Sending coupon {instance.code} to {user.phone_number}')
            send_coupon_sms.delay(user.phone_number, instance.code, instance.discount)
