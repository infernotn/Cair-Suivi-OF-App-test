# Generated by Django 4.2.2 on 2023-07-08 17:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("OFs", "0008_alter_of_derogation"),
    ]

    operations = [
        migrations.CreateModel(
            name="PlanningFile",
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
                ("file", models.FileField(upload_to="planning_files")),
            ],
        ),
        migrations.AlterField(
            model_name="of",
            name="Date_prévu",
            field=models.DateField(default=datetime.date(2023, 7, 8)),
        ),
    ]
