# Django Setup

## Create Project

1. Create repo and clone
2. Create virtual environment
3. Start virtual environment
4. Add gitignore, README.md
4. Install django: pip install django
5. Create Django project (must include . at end): django-admin startproject project_name .
6. If using default user database:
- Update Django: python manage.py migrate
- Create superuser named 'admin': python manage.py createsuperuser
7. If using custom user database, go to that section.
8. Start server and check install: python manage.py runserver



## Install Django Environment
1. pip install django-environ

2. Add .env file to PROJECT, not root folder.  Add .env.sample

```pseudo
DEBUG=True
SECRET_KEY=django-insecure-*g*-qc2)=%9(vy*!=6x46vwjvef!qzlgicp3pg)=h+-=ssr-)0 REPLACE THIS WITH YOUR KEY, no quotes
```

3. Add to settings.py
```pseudo

import environ
from pathlib import Path

# ENV setup
env = environ.Env(
    DEBUG=(bool, False),
)
environ.Env.read_env()

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool('DEBUG')

```


4. Start server and test webpage to ensure .env is loaded.  python manage.py runserver



## Install TailwindCSS (if using)
1. Install Django compressor: pip install django-compressor
2. Add to settings.py
```pseudo
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'snacks',
    'compressor',
]

# Add to end of file:
COMPRESS_ROOT = BASE_DIR / 'static'
COMPRESS_ENABLED = True
STATICFILES_FINDERS = ('compressor.finders.CompressorFinder',)
```

3. Install TailwindCSS: npm install -D tailwindcss
4. npx tailwindcss init
5. Add templates to tailwindcss.config.js
```pseudo
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './templates/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
6. Build static/src/input.css
```pseudo
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Build output.css: npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch



## Install Flowbite for Tailwind components (if using)
1. npm install flowbite
2. Add to tailwind.config.js
```pseudo
module.exports = {
  darkMode: 'class',
  content: [
    './templates/*.html',
    './node_modules/flowbite/*.js'
  ],

```



## Freeze dependencies
1. pip freeze > requirements.txt



## Custom Users
1. Create app called accounts: python manage.py startapp accounts
2. Update settings.py
```pseudo
INSTALLED_APPS = [
    'accounts'
]

# Custom User Model
AUTH_USER_MODEL = "accounts.CustomUser"
```

3. Update accounts/models.py with new CustomUser class
```pseudo
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.username

```

4. Create accounts/forms.py
```pseudo
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

5. Update accounts/admin.py

```pseudo
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username',]

admin.site.register(CustomUser, CustomUserAdmin)
```

6. python manage.py makemigrations

7. python manage.py migrate

[Migrations exception](https://stackoverflow.com/questions/44651760/django-db-migrations-exceptions-inconsistentmigrationhistory)

8. Create superuser named 'admin': python manage.py createsuperuser

9. Test accounts.  Run server, go to admin, login as admin.



## Create App

1. Create app: python manage.py startapp app_name
2. Add app to project in settings.py.
```pseudo
INSTALLED_APPS = [
    'app_name',
]
```



## Create models
1. in APP/models.py, create class models
``` pseudo
from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

class Prospect(models.Model):
    name = models.CharField(max_length=64)
    school = models.CharField(max_length=64)
    position = models.CharField(max_length=64)
    report = models.URLField()
    scout = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('prospect_detail', args=[str(self.id)])


```

2. Register model with APP/admin.py
```pseudo

from django.contrib import admin
from .models import Prospect

admin.site.register(Prospect)

```

3. Check model structure: python manage.py makemigrations
4. Make the table in database: python manage.py migrate
5. Test database by adding something






## Create Templates (i.e. html files)
1. Create templates folder in repo root.  Point PROJECT to APP templates
```pseudo
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

2. Create base template with header / footer

{% comment %}
```pseudo
{% load compress %}
{% load static %}

<!DOCTYPE html>
<html lang="en" class = 'dark'>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mike's first django site</title>

    <!-- Tailwind CSS stuff -->
    {% compress css %}
      <link rel="stylesheet" href="{% static 'src/output.css' %}">
    {% endcompress %}
</head>

<header>
    <nav>
        <!-- references link using name from urls.py      -->
        <a href="{% url 'home' %}">Home</a>
        <a href="{% url 'about' %}">About</a>
    </nav>
</header>

<body>

<!-- Default content, can be overridden by other files -->
{% block content %}
    <h1>Forgot content</h1>
{% endblock content %}

</body>

```
{% endcomment %}

3. Create html file, using base template
{% comment %}
```pseudo
<!-- import in base template -->
{% extends 'base.html' %}

<!-- replaces 'content' in base.html with this 'content' -->
{% block content %}
    <h1 class="text-3xl text-green-800">Home Page Django</h1>
    {% for fruit in fruits %}
        <p> I like {{fruit}}.</p>

    {% endfor %}
{% endblock content %}
{% endcomment %}


```



## Create VIEWS
1. Create class definitions that point to html files
```pseudo
class HomePageView(TemplateView):
    template_name = 'home.html' # points to html file

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fruits"] = ['apple', 'banana', 'peach'] # data that's being used
        return context

class AboutPageView(TemplateView):
    template_name = 'about.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["characteristics"] = ['awesome', 'dapper', 'heroic']
        return context


```



## Create URLs

1. in PROJECT urls.py, point to APP urls.py
```pseudo
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app_name.urls')),
]

```

2. in APP urls.py, point to VIEWS
```pseudo
urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about', AboutPageView.as_view(), name='about'),
    # 'about' is the url
    # HomePageView() is the class in views.py
    # name='home' is a name that can be used by django for reference
]
```



## Create tests in app tests.py
1. Create tests in APP tests.py
2. Run tests: python manage.py test



## CHECKS
1. PROJECT urls.py
- import includes
- Add path to apps

2. settings.py
- dotenv imports, load
- SECRET_KEY pull from .env
- INSTALLED_APPS - add all apps
- TEMPLATES - add directory for base directory
- compressor entries at end









## Django Rest Framework
1. pip install djangorestframework
2. Add it to settings.py
```pseudo
INSTALLED_APPS = [
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permission.AllowAny',
    ]
}

```
3. PROJECT urls.py, 


## Docker
1. touch docker-compose.yml
```pseudo
version: '3'

services:
    web:
        build: .
        command: python manage.py runserver 0.0.0.0:8000
        volumes:
            - .:/code
        ports:
            - "8000:8000:
# NOTE: May need to change 0.0.0.0 to localhost
```

2. touch Dockerfile
```psuedo


```
3. docker compose up
4. Add IP to settings.py
```pseudo
ALLOWED_HOSTS = ['0.0.0.0', 'localhost']
# NOTE: May need to change 0.0.0.0 to localhost
```

