from django.contrib import admin
from .models import Product, Services, Faq, Ticket

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


class TicketAdmin(admin.ModelAdmin):
    list_display = ['title', 'email', 'date']
    list_filter = ['title', 'email', 'date']
    search_fields = ['title','email']
    list_per_page = 20


admin.site.register(Product, ProductAdmin)
admin.site.register(Services, ServiceAdmin)
admin.site.register(Faq, FaqAdmin)
admin.site.register(Ticket, TicketAdmin)