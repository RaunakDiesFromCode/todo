# Generated by Django 5.0.7 on 2024-07-27 10:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_todolist_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todolist',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
