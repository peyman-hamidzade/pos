
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
    updated = models.DateTimeField(auto_now_add = True)
    description = models.TextField()
    stock = models.PositiveIntegerField()
    COLOR_CHOICES = [
        ('red', 'Red'),
        ('blue', 'Blue'),
        ('green', 'Green'),
    ]
    color = models.CharField(max_length=10, choices=COLOR_CHOICES, null=True)
    count = models.PositiveIntegerField(default=0)
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
    updated = models.DateTimeField(auto_now_add=True)
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