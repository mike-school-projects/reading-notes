# Class Notes

This is an important topic because we want to be able to send secure data.

1. What is the primary purpose of JSON Web Tokens (JWTs) and how do they work in terms of encoding and decoding data?

JWTs are used to send JSON info securely.

There are 3 major parts:
- Header: contains type of token and algorithm used to sign the token
- Payload: data
- Signature: header + payload, signed and hashed

2. How does JWT Authentication integrate with Django REST Framework to secure API endpoints, and what are the key components involved in this process?

- install djangorestframework_simplejwt
- Add to settings.py
- Add path to urls.py to obtain and refresh tokens
- To views, add permission_classes

3. Why is Django’s built-in runserver not suitable for production environments, and what are some alternative server options that should be considered for deploying a Django application?

runserver has not gone through security audits or performance tests

Nginx is a alternative.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
