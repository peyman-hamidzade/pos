from django.urls import path
from .views import RegisterView, verify_phone, CustomTokenObtainPairView, send_reset_code, reset_password
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('verify-phone/', verify_phone, name='verify_phone'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('send-reset-code/', send_reset_code, name='send-reset-code'),
    path('reset-password/', reset_password, name='reset-password'),
]
