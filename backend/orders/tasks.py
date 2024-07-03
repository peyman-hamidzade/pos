import logging
from celery import shared_task
from kavenegar import *

logger = logging.getLogger(__name__)

@shared_task
def send_status_sms(phone_number, status):
    try:
        # send sms with Kavenegar
        logger.info(f'order status sent to phone number: {phone_number} with status: {status}.')
    except APIException as e:
        logger.error(f'APIException: {e}')
    except HTTPException as e:
        logger.error(f'HTTPException: {e}')
