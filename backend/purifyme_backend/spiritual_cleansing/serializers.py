from rest_framework import serializers
from .models import SpiritualPost, SpiritualComment


class SpiritualCommentSerializer(serializers.ModelSerializer):
    author_username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = SpiritualComment
        fields = ['id', 'post', 'author', 'author_username', 'text', 'created_at']
        read_only_fields = ['author', 'created_at']


class SpiritualPostSerializer(serializers.ModelSerializer):
    author_username = serializers.ReadOnlyField(source='author.username')
    comments = SpiritualCommentSerializer(many=True, read_only=True)

    class Meta:
        model = SpiritualPost
        fields = ['id', 'author', 'author_username', 'text', 'cleanses', 'punishments', 'created_at', 'comments']
        read_only_fields = ['author', 'cleanses', 'punishments', 'created_at']