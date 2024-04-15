
from django.db import models
from django.utils.text import slugify



class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length = 255)
    slug = models.SlugField(allow_unicode = True , unique=True, blank=True)
    price = models.PositiveIntegerField()
    image = models.ImageField(upload_to='media/')
    created = models.DateTimeField(auto_now_add = True)
    updated = models.DateTimeField(auto_now = True)
    COLOR_CHOICES = [
    ('red', 'Red'),
    ('blue', 'Blue'),
    ('green', 'Green'),
    ('black', 'Black'),
    ('yellow', 'Yellow'),
    ('white', 'White'),
    ]
    device_status = models.CharField(max_length=50, null=True)
    color = models.CharField(max_length=10, choices=COLOR_CHOICES, null=True)
    is_used = models.BooleanField(default=False)
    charging_time = models.CharField(max_length=50, null=True)
    charge_duration = models.CharField(max_length=50, null=True)
    battery_capacity = models.CharField(max_length=50, null=True)
    transaction_speed = models.CharField(max_length=20, null=True)
    ram_memory = models.CharField(max_length=20, null=True)
    display_type = models.CharField(max_length=20, null=True)
    display_color = models.CharField(max_length=20, null=True)
    display_size = models.CharField(max_length=20, null=True)
    printer_type = models.CharField(max_length=50, null=True)
    keyboard_type = models.CharField(max_length=20, null=True)
    weight = models.CharField(max_length=20, null=True)
    dimensions = models.CharField(max_length=50, null=True)
    bluetooth = models.BooleanField(verbose_name="بلوتوث", null=True)
    gprs = models.BooleanField(verbose_name="GPRS", null=True)
    wifi = models.BooleanField(verbose_name="WiFi", null=True)
    connected_banks = models.CharField(max_length=100, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['-created',]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Comment(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='comments')
    user_name = models.CharField(max_length=255)
    email = models.EmailField()
    review = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f'commented by {self.user_name} on {self.product.name}.'

    class Meta:
            ordering = ['-created',]
            indexes = [
            models.Index(fields=['created']),
            ]


class Services(models.Model):
    image = models.ImageField(upload_to='meida/')
    title = models.CharField(max_length=200)
    text = models.TextField()

    def __str__(self):
        return self.title


class Faq(models.Model):
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.question


class Ticket(models.Model):
    title = models.CharField(max_length = 255)
    email = models.EmailField()
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} by {self.email}'