from django.contrib import admin
from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'slug', 'created', 'stock', 'count', 'color']
    list_filter = ['created', 'stock']
    search_fields = ['name','text']
    readonly_fields = ['created', 'slug']
    list_per_page = 20

admin.site.register(Product, ProductAdmin)