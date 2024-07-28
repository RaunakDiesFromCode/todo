from django.contrib import admin

from main.models import TodoList, WebsiteViews

# Register your models here.
admin.site.register(TodoList)
admin.site.register(WebsiteViews)