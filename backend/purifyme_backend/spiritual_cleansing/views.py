from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import SpiritualComment, SpiritualPost
from .serializers import SpiritualCommentSerializer, SpiritualPostSerializer
from rest_framework.views import APIView
from rest_framework import serializers

class SpiritualPostListCreateAPIView(generics.ListCreateAPIView):
    queryset = SpiritualPost.objects.all().order_by('-created_at')
    serializer_class = SpiritualPostSerializer
    permission_classes =  [IsAuthenticatedOrReadOnly]


    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class SpiritualPostCleansingAPIView(APIView):
    permission_classes =  [IsAuthenticatedOrReadOnly]

    def post(self, request, pk, *args, **kwargs):
        try:
            post = SpiritualPost.objects.get(pk=pk)
        except SpiritualPost.DoesNotExist:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)

        action = request.data.get('action')
        if action == 'cleanse':
            post.cleanses += 1 
            post.save()
            return Response({'message': 'Post cleansed.'}, status=status.HTTP_200_OK)
        elif action == 'punish':
            post.punishments += 1
            post.save()
            return Response({'message': 'Post Punished'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid action.'}, status=status.HTTP_400_BAD_REQUEST)


class SpiritualCommentCreateAPIView(generics.CreateAPIView):
    queryset = SpiritualComment.objects.all()
    serializer_class = SpiritualCommentSerializer
    permission_classes =  [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        post_id = self.request.data.get('post')
        try:
            post = SpiritualPost.objects.get(pk=post_id)
            serializer.save(author=self.request.user, post=post)
        except SpiritualPost.DoesNotExist:
            raise serializers.ValidationError({'post': 'Post not found'})