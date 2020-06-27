from django.contrib import admin

# Register your models here.
from tweets.models import Tweet, TweetLike

class TweetLikeAdmin(admin.TabularInline):
    model = TweetLike


class TweetAdmin(admin.ModelAdmin):
    inlines = [TweetLikeAdmin]
    list_display = ["__str__", "user"]
    search_fields = ["user__username", "user_email"]

    class Meta:
        model = Tweet


admin.site.register(Tweet, TweetAdmin)
