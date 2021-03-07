from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ttc = models.BooleanField(default=True)
