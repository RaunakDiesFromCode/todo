# Generated by Django 5.0.7 on 2024-07-28 16:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_todolist_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todolist',
            name='user',
        ),
    ]
