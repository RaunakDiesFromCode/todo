from rest_framework import serializers
from django.contrib.auth.models import User
from .models import TodoList, WebsiteViews
from datetime import datetime


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User(
            email=validated_data["email"],
            username=validated_data["username"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class TodoSerializers(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()

    class Meta:
        model = TodoList
        fields = ["id", "title", "status", "created_at"]

    def get_created_at(self, obj):
        if isinstance(obj.created_at, datetime):
            return obj.created_at.date()
        return obj.created_at
    

class WebsiteViewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = WebsiteViews
        fields = ["id","total_views"]

    def create(self, validated_data):
        totalViews = WebsiteViews.objects.count()
        if totalViews > 0:
            totalViews = WebsiteViews.objects.first()
            WebsiteViews.objects.all().update(total_views=totalViews.total_views + 1)
        else:
            WebsiteViews.objects.create(total_views=1)
        totalViews = WebsiteViews.objects.first()
        return totalViews
