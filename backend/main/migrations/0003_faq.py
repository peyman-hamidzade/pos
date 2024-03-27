# Generated by Django 5.0.3 on 2024-03-27 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0002_services"),
    ]

    operations = [
        migrations.CreateModel(
            name="Faq",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("question", models.TextField()),
                ("answer", models.TextField()),
            ],
        ),
    ]
