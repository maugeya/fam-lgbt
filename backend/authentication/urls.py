from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import ObtainTokenPairView, CustomUserCreate, EditProfileView, LogoutView

urlpatterns = [
    path("user/create/", CustomUserCreate.as_view(), name="create_user"),
    path("token/obtain/", ObtainTokenPairView.as_view(), name="token_create"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("edit-profile/", EditProfileView.as_view(), name="edit_profile")
]
