# Class Notes

This is an important topic because we want to make django apps that are secure and clean.

1. What are the key principles to follow when organizing and configuring Django settings for a project, according to the “Django Settings Best Practices” reading?

Keep settings in environment variables so we don't expose it to the public.

Write default values for production configuration (excluding secret keys and tokens) so we handle key not found errors.

Don’t hardcode sensitive settings, and don’t put them in VCS.

Split settings into groups: Django, third-party, project to keep things organized.

Follow naming conventions for custom (project) settings to make things readable.

2. How does the White Noise library contribute to the efficient serving of static files in a Django application, and what are the steps to integrate it into a project?

White Noise library serves static files directly from the application, instead of the web server, which makes it more efficient.

- pip install whitenoise
- Add it to settings.py in MIDDLEWARE and configure it
- Add route in urls.py for static files

3. What is the purpose of Cross-Origin Resource Sharing (CORS) in web applications, and how can it be implemented and configured in a Django project to control access to resources?

For security purposes, we don't want a browser to request info from another different domain.

It accomplishes this by adding extra info to the http header.

- pip install django-cors-headers
- Add it to settings.py in MIDDLEWARE and configure it

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
