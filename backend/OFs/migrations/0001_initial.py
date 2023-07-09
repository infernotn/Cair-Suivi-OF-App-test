# Generated by Django 4.2.2 on 2023-07-04 23:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="OF",
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
                ("N_OF", models.TextField(max_length=20)),
                ("N_LOT", models.TextField(max_length=20)),
                ("Reference", models.TextField(max_length=10)),
                ("Quantite", models.IntegerField(default=0)),
            ],
        ),
    ]