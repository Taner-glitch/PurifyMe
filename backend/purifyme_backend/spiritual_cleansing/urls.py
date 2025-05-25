from django.urls import path
from .views import (
    SpiritualPostListCreateAPIView,
    SpiritualPostCleansingAPIView,
    SpiritualCommentCreateAPIView
)

urlpatterns = [
    path('posts/', SpiritualPostListCreateAPIView.as_view(), name='post-list-create'),
    path('posts/<int:pk>/action/', SpiritualPostCleansingAPIView.as_view(), name='post-action'),
    path('comments/', SpiritualCommentCreateAPIView.as_view(), name='comment-create'),
]