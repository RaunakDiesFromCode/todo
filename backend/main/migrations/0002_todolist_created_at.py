# Generated by Django 5.0.7 on 2024-07-27 08:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todolist',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 7, 27, 8, 59, 35, 150442)),
        ),
    ]
