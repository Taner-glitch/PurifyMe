from django.contrib import admin
from .models import SpiritualPost, SpiritualComment

@admin.register(SpiritualPost)
class SpiritualPostAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'text', 'cleanses', 'punishments', 'created_at')
    search_fields = ('text', 'author__username')
    list_filter = ('created_at',)

@admin.register(SpiritualComment)
class SpiritualCommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'post', 'author', 'text', 'created_at')
    search_fields = ('text', 'author__username')
    list_filter = ('created_at',)