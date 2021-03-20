from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView


from .serializers import TokenObtainPairSerializer, CustomUserSerializer


class ObtainTokenPairView(TokenObtainPairView):
    """Login view"""
    permission_classes = (permissions.AllowAny,)
    serializer_class = TokenObtainPairSerializer

class CustomUserCreate(APIView):
    """
    Register new user view
    """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format="json"):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditProfileView(APIView):
    """
    A protected view for editing user profiles
    """

    def get(self, request):
        return Response (data={"hello": "world"}, status=status.HTTP_200_OK)
