# Generated by Django 5.0.7 on 2024-07-27 09:06

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_todolist_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todolist',
            name='created_at',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
