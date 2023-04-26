# Class Notes

This is an important topic because custom users are an essential component to user interfaces.

1. What are the key benefits of using a Django Custom User Model, and how does it differ from the default Django User Model?

Can use email to login instead of username.  Can also add additional fields.

Default user model is limited to username login, and cannot do additional fields.

2. Explain the process of creating and implementing a Custom User Model in Django, including the necessary changes to settings.py and the required model fields.

Create app called accounts

Update settings.py
- Add accounts to INSTALLED_APPS
- Add accounts.CustomUser to AUTH_USER_MODEL

Update accounts/models.py with new CustomUser class

```pseudo
# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ("username", "email")

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ("username", "email")
```


Update admin.py

```pseudo
# accounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["email", "username",]

admin.site.register(CustomUser, CustomUserAdmin)
```

3. What is DjangoX and how does it complement or extend the functionality of Django? Provide an example use case for incorporating DjangoX in a project.

DjangoX is a starter project that includes a bunch of things.

Includes custom user model, email authentication, via django-allauth, bootstrap 5, etc.

Use case would be for getting a simple base django projected started up quickly..

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
