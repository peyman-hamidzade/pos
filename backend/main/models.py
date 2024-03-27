from django.db import models
from django.utils.text import slugify



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

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['-created',]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

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

