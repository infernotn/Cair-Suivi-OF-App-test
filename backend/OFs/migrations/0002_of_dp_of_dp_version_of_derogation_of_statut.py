# Generated by Django 4.2.2 on 2023-07-05 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("OFs", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="of",
            name="DP",
            field=models.TextField(default="", max_length=10),
        ),
        migrations.AddField(
            model_name="of",
            name="DP_version",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="of",
            name="Derogation",
            field=models.TextField(default="", max_length=500),
        ),
        migrations.AddField(
            model_name="of",
            name="Statut",
            field=models.TextField(default="à lancer", max_length=50),
        ),
    ]