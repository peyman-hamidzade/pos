from django.contrib import admin
from .models import Product, Services, Faq

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'text', 'image']
    list_filter = ['title']
    search_fields = ['title', 'text']
    list_per_page = 20

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'slug', 'created', 'stock', 'count', 'color']
    list_filter = ['created', 'stock']
    search_fields = ['name','text']
    readonly_fields = ['created', 'slug']
    list_per_page = 20

class FaqAdmin(admin.ModelAdmin):
    list_display = ['question']
    list_filter = ['question']
    search_fields = ['question']



admin.site.register(Product, ProductAdmin)
admin.site.register(Services, ServiceAdmin)
admin.site.register(Faq, FaqAdmin)