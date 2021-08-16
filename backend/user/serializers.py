from rest_framework import serializers

from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    """
    The serializer user for user profiles
    """
    bio = serializers.CharField()
    location = serializers.CharField()

    class Meta:
        model = Profile
        fields = ('bio', 'location')
