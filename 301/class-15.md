# Class 15 Notes

This is an important topic because we want to be able to use other websites and need to get authorization / authentication.

## Reading Notes

What is OAuth

1. What is OAuth?  Open standard for secure, third-part, user-agent, delegated authorization.
2. Give an example of what using OAuth would look like.  When you login, it asked if you want to use other
3. How does OAuth work? What are the steps that it takes to authenticate the user?
First website connects to 2nd website using OAuth
2nd website generates 1-time token
Client approves the transaction
Appproval token gets passed back to 2nd website, and 2nd website gives 1st website access
4. What is OpenID?  OpenID does authentication, OAuth does authorization

Authorization and Authentication flows

1. What is the difference between authorization and authentication?
Authorization - allows access
Authentication - verifies identity
2. What is Authorization Code Flow?  exchanges an Authorization Code for a token
3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?  introduces a secret created by the calling application that can be verified by the authorization server
4. What is Implicit Flow with Form Post?  The web app requests and obtains tokens through the front channel, without the need for secrets or extra backend calls. With this method, you don’t need to obtain, maintain, use, and protect a secret in your application
5. What is Client Credentials Flow?  pass along their Client ID and Client Secret to authenticate themselves and get a token
6. What is Device Authorization Flow?  pass along their Client ID to initiate the authorization process and get a token.
7. What is Resource Owner Password Flow?  requests that users provide credentials (username and password), typically using an interactive form

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
