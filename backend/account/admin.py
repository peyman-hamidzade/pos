from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from account.models import CustomUser, Profile

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False

class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline,)
    list_display = ['username', 'email', 'phone_number']

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
        if not Profile.objects.filter(user=obj).exists():
            Profile.objects.create(user=obj)

admin.site.register(CustomUser, CustomUserAdmin)
