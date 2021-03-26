"""
Authentication serializers
"""

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.db import IntegrityError

from .models import CustomUser


class TokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    The serializer used for user login
    """
    @classmethod
    def get_token(cls, user):
        token = super(TokenObtainPairSerializer, cls).get_token(user)
        return token


class CustomUserSerializer(serializers.Serializer):
    """
    The serializer used for user requests
    """

    email = serializers.EmailField(
        required=True,
        validators=[
            UniqueValidator(
                queryset=CustomUser.objects.all(),
                message="Looks like you've already registered! Please try logging in."
            )
        ]
    )
    username = serializers.CharField(
        trim_whitespace=True,
        required=True,
        validators=[
            UniqueValidator(
                queryset=CustomUser.objects.all(),
                message="This username has already been taken."
            )
        ]
    )
    password = serializers.CharField(min_length=8, write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """
        Serializer method for registering a new user
        """
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance
