# auth.md

## Overview

Welcome to the Gemini Japanese Agent Authentication and Registration Guide.
This document outlines the authentication procedures, registration endpoints, and supported credential mechanisms for autonomous AI agents interacting with Gemini Japanese services.

## Audience

This guide is intended for AI agents, automated systems, and client integrations connecting to Gemini Japanese APIs.

## Metadata & Discovery Endpoints

- OAuth Protected Resource Metadata: https://translate.nevatal.tech/.well-known/oauth-protected-resource
- OAuth 2.0 Authorization Server Metadata: https://translate.nevatal.tech/.well-known/oauth-authorization-server
- OpenID Connect Discovery: https://translate.nevatal.tech/.well-known/openid-configuration
- API Catalog: https://translate.nevatal.tech/.well-known/api-catalog

## Registration Flow

Agents can register dynamically or provision access via the registration endpoints:
- Registration URI: https://translate.nevatal.tech/api/auth/register
- Claim URI: https://translate.nevatal.tech/api/auth/recover
- Revocation URI: https://translate.nevatal.tech/api/auth/logout

### Step 1: Agent Registration Request

To register an agent, submit a POST request to the registration endpoint:

```http
POST /api/auth/register HTTP/1.1
Host: translate.nevatal.tech
Content-Type: application/json

{
  "email": "agent@example.com",
  "password": "SecurePassword123!"
}
```

### Step 2: Response with Credentials

The server returns the account details, session cookie, and recovery code:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "user": {
    "id": "agent-uuid-1234",
    "email": "agent@example.com"
  },
  "recoveryCode": "sample_recovery_code"
}
```

## Supported Authentication Methods

1. Anonymous Agent Access:
   - Identity Types: anonymous
   - Credential Types: api_key, bearer_token
   - Claim URI: https://translate.nevatal.tech/api/auth/recover

2. Verified Email Identity:
   - Assertion Types: verified_email
   - Credential Types: api_key, bearer_token
   - Claim URI: https://translate.nevatal.tech/api/auth/recover

3. ID-JAG (Identity Assertion):
   - Assertion Type: urn:ietf:params:oauth:token-type:id-jag
   - Identity Types: identity_assertion
   - Credential Types: bearer_token
   - Revocation Event: revocation
   - Revocation URI: https://translate.nevatal.tech/api/auth/logout

## Credential Use

To access protected endpoints, include the session cookie or bearer token in the HTTP request:

```http
Authorization: Bearer <your-token>
```
