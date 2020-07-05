from django.urls import path

from profiles.views import profile_detail_view, profile_update_view

urlpatterns = [
    path('<str:username>', profile_detail_view),
    path('edit/', profile_update_view),
]