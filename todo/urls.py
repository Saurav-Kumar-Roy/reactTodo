from django.urls import path
from .views import TodoDetail,TodoUpdate

urlpatterns = [
    path('add',TodoDetail.as_view(),name="add"),
    path('update/<int:id>',TodoUpdate.as_view(),name="update")
]