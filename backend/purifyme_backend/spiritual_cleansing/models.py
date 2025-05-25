from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class SpiritualPost(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    text = models.TextField()
    cleanses = models.PositiveIntegerField(default=0)
    punishments = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author.username} - {self.text[:30]}"

class SpiritualComment(models.Model):
    post = models.ForeignKey(SpiritualPost,on_delete=models.CASCADE,related_name='comments')
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author.username} on {self.post.id}"