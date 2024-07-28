from django.urls import path
from rest_framework.authtoken import views as restViews
from .views import TodoApiUpdateView, UserApiView, TodoApiView, WebsiteViewsAPI

urlpatterns = [
    path('users', UserApiView.as_view()),
    path('todos', TodoApiView.as_view()),
    path('todos/<pk>', TodoApiUpdateView.as_view()),
    path('total_views', WebsiteViewsAPI.as_view()),
    path('token-auth', restViews.obtain_auth_token),
]