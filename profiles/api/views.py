from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

User = get_user_model()

ALLOWED_HOSTS = settings.ALLOWED_HOSTS


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username, *args, **kwargs):
    current_user = request.user
    to_follow_qs = User.objects.filter(username=username)
    if not to_follow_qs.exists():
        return Response({}, status=404)
    profile = to_follow_qs.first().profile
    data = request.data or {}
    action = data.get("action")
    if action == "follow":
        profile.followers.add(current_user)
    elif action == "unfollow":
        profile.followers.remove(current_user)
    current_followers_qs = profile.followers.all()
    return Response({"followers": current_followers_qs.count()}, status=200)
