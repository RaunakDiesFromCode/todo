# Generated by Django 5.0.7 on 2024-07-29 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_todolist_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todolist',
            name='author',
        ),
    ]
