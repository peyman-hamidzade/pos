import random
import redis
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.conf import settings
from rest_framework.views import APIView
from .serializers import UserSerializer, VerifyPhoneSerializer, CustomTokenObtainPairSerializer, ResetPasswordSerializer
from rest_framework_simplejwt.views import TokenViewBase
from rest_framework import serializers 

# Connect to redis
redis_instance = redis.StrictRedis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=0)

User = get_user_model()

def generate_random_6_digit():
    return random.randint(100000, 999999)

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            self.send_verification_code(user.phone_number)
            return Response({"message": "کد تایید برای شما ارسال شد."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_verification_code(self, phone_number):
        code = generate_random_6_digit()
        # Here you would send the code via SMS using Kavenegar
        # For this example, we'll just print the code
        # api = KavenegarAPI('YOUR_API_KEY')
        # params = {
        #     'sender': '10004346',
        #     'receptor': phone_number,
        #     'message': f'Your verification code is: {code}'
        # }
        # response = api.sms_send(params)
        print(f"Verification code for {phone_number}: {code}")
        redis_instance.setex(f'verification_code_{phone_number}', 120, str(code))

@api_view(['POST'])
def verify_phone(request):
    serializer = VerifyPhoneSerializer(data=request.data)
    if serializer.is_valid():
        phone_number = serializer.validated_data['phone_number']
        verification_code = serializer.validated_data['verification_code']
        stored_code = redis_instance.get(f'verification_code_{phone_number}')
        if stored_code and stored_code.decode() == verification_code:
            try:
                user = User.objects.get(phone_number=phone_number)
                user.is_phone_verified = True
                user.is_active = True
                user.save()
                return Response({"message": "شماره موبایل تایید شد."}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "کاربر یافت نشد ."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "کد تایید نادرست است یا منقضی شده است ."}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomTokenObtainPairView(TokenViewBase):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except serializers.ValidationError as e:
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.validated_data, status=status.HTTP_200_OK)
    

@api_view(['POST'])
def send_reset_code(request):
    phone_number = request.data.get('phone_number')
    if not phone_number:
        return Response({'error': 'شماره موبایل را وارد کنید'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(phone_number=phone_number)
    except User.DoesNotExist:
        return Response({'error': 'کاربر با این شماره موبایل یافت نشد .'}, status=status.HTTP_404_NOT_FOUND)

    code = generate_random_6_digit()
    # send code with kavenegar
    print(f"Reset code for {phone_number}: {code}")
    redis_instance.setex(f'reset_code_{phone_number}', 120, str(code))

    return Response({'message': 'کد تایید برای شما ارسال شد .'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def reset_password(request):
    serializer = ResetPasswordSerializer(data=request.data)
    if serializer.is_valid():
        phone_number = serializer.validated_data['phone_number']
        reset_code = serializer.validated_data['reset_code']
        new_password = serializer.validated_data['new_password']

        stored_code = redis_instance.get(f'reset_code_{phone_number}')
        if stored_code and stored_code.decode() == reset_code:
            try:
                user = User.objects.get(phone_number=phone_number)
                user.set_password(new_password)
                user.save()
                return Response({"message": "بازیابی رمز عبور با موفقیت انجام شد ."}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "کاربر یافت نشد"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "کد تایید نادرست است یا منقضی شده است ."}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
