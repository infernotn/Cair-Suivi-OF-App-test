# Generated by Django 4.2.2 on 2023-07-05 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("OFs", "0002_of_dp_of_dp_version_of_derogation_of_statut"),
    ]

    operations = [
        migrations.AlterField(
            model_name="of",
            name="DP",
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="of",
            name="DP_version",
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name="of",
            name="Derogation",
            field=models.TextField(max_length=500, null=True),
        ),
    ]
