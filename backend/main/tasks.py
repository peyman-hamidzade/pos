import logging
from celery import shared_task
from kavenegar import *

logger = logging.getLogger(__name__)

@shared_task
def send_coupon_sms(phone_number, coupon_code, discount):
    try:
        # send sms with Kavenegar
        logger.info(f'Coupon code: {coupon_code} sent to phone number: {phone_number} with discount: {discount}.')
    except APIException as e:
        logger.error(f'APIException: {e}')
    except HTTPException as e:
        logger.error(f'HTTPException: {e}')
