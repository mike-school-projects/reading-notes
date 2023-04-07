# Class Notes

This is an important topic because we want to be able to deploy our work to the web.

## What is Serverless Computing?

Run applications / code without backend servers.

Pros:
- developer productivity
- Pay for execution, not downtime
- Not language specific
- 

venv - module used to create virtual environments.  Helpful to isolate environments for development and testing

vercel - platform to create and deploy web applications.  Uses next.js.  Similar to netlify

http.server - module with classes for web servers.  Use BaseHTTPRequestHandler.

Requests - module for handling http requests

Python APIs

3 different models: REST, SOAP, and GraphQL.  REST is the big one.

use request module

http methods:
1. request.get("http://webaddress)
2. request.post()
3. request.put()
4. request.delete()

headers = {"X-Request-Id": "<my-request-id>"}

response = requests.get("https://example.org", headers=headers) 

What is Serverless?

Doesn't mean that there aren't servers, but that you don't have to manage servers as a dev.

FAAS - function as a service

Benefits:
1. Pay for execution
2. Auto scalable
3. Fast to market
4. Polyglot
5. Highly available

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
