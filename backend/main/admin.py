
from django.contrib import admin
from .models import Product, Services, Faq, Ticket, Comment, Category, Coupon


class CommentAdmin(admin.ModelAdmin):
    list_display = ['review', 'product', 'email']
    list_filter = ['product', 'email', 'user_name']
    search_fields = ['product', 'user_name', 'email']

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'text', 'image']
    list_filter = ['title']
    search_fields = ['title', 'text']
    list_per_page = 20

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'slug', 'created', 'color']
    list_filter = ['created']
    search_fields = ['name','text']
    readonly_fields = ['created', 'slug']
    list_per_page = 20

class FaqAdmin(admin.ModelAdmin):
    list_display = ['question']
    list_filter = ['question']
    search_fields = ['question']


class TicketAdmin(admin.ModelAdmin):
    list_display = ['title', 'email', 'date']
    list_filter = ['title', 'email', 'date']
    search_fields = ['title','email']
    list_per_page = 20


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_filter = ['name']
    search_fields = ['name']

class CouponAdmin(admin.ModelAdmin):
    list_display = ['is_active', 'code', 'discount']
    list_filter = ['is_active']
    search_fields = ['is_active', 'code', 'discount']


admin.site.register(Product, ProductAdmin)
admin.site.register(Services, ServiceAdmin)
admin.site.register(Faq, FaqAdmin)
admin.site.register(Ticket, TicketAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Coupon, CouponAdmin)
