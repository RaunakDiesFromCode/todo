from django.shortcuts import render
from .serializers import UserSerializers, TodoSerializers, WebsiteViewsSerializers
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User
from .models import TodoList, WebsiteViews
from rest_framework import generics

# Create your views here.
class UserApiView(ListCreateAPIView):
    serializer_class = UserSerializers
    queryset = User.objects.all()

class TodoApiView(generics.ListCreateAPIView):
    queryset = TodoList.objects.all()
    serializer_class = TodoSerializers

class TodoApiUpdateView(RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializers
    queryset = TodoList.objects.all()

class WebsiteViewsAPI(ListCreateAPIView):
    serializer_class = WebsiteViewsSerializers
    queryset = WebsiteViews.objects.all()