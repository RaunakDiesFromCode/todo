# Generated by Django 5.0.7 on 2024-07-29 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_remove_todolist_user_alter_todolist_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='websiteviews',
            name='total_views',
            field=models.IntegerField(),
        ),
    ]
