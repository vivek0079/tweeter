from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response

from profiles.models import Profile
from profiles.serializers import PublicProfileSerializer

User = get_user_model()

ALLOWED_HOSTS = settings.ALLOWED_HOSTS


@api_view(['GET', 'POST'])
def profile_detail_api_view(request, username, *args, **kwargs):
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return Response({"detail": "User not found"}, status=404)
    profile_obj = qs.first()
    data = request.data or {}
    if request.method == "POST":
        current_user = request.user
        print(profile_obj.user.username)
        print(current_user.username)
        action = data.get("action")
        if profile_obj.user != current_user:
            print(action)
            if action == "follow":
                profile_obj.followers.add(current_user)
            elif action == "unfollow":
                profile_obj.followers.remove(current_user)
    serializer = PublicProfileSerializer(instance=profile_obj, context={"request": request})
    return Response(serializer.data, status=200)

#
# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_follow_view(request, username, *args, **kwargs):
#     current_user = request.user
#     to_follow_qs = User.objects.filter(username=username)
#     if not to_follow_qs.exists():
#         return Response({}, status=404)
#     profile = to_follow_qs.first().profile
#     data = request.data or {}
#     action = data.get("action")
#     if action == "follow":
#         profile.followers.add(current_user)
#     elif action == "unfollow":
#         profile.followers.remove(current_user)
#     data = PublicProfileSerializer(instance=profile, context={"request": request})
#     return Response(data.data, status=200)
