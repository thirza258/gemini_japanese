## AWS Amplify React+Vite Starter Template

This repository provides a starter template for creating applications using React+Vite and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## AI & OpenRouter Setup

The translator uses OpenRouter's OpenAI-compatible chat completions endpoint with client-side **AES-256-GCM encryption** for API keys.

### Environment Variables
- `OPENROUTER_API_KEY`: Server-side OpenRouter API key used by the reverse proxy (Nginx in production / Vite proxy in dev). Never exposed to the browser.
- `VITE_OPENROUTER_ENDPOINT`: Router endpoint URL (defaults to `/api/openrouter/chat/completions` for proxy mode).
- `VITE_OPENROUTER_MODEL`: Model override, defaults to `google/gemma-4-26b-a4b-it`.

### Security & API Key Encryption
- **Encapsulated Reverse Proxy**: Default requests route through `/api/openrouter/chat/completions`, where the proxy attaches authentication server-side so no API key or Authorization header is exposed in the browser's Network tab.
- **AES-256-GCM Web Crypto**: When users optionally enter custom API keys in the settings modal, they are encrypted client-side using PBKDF2 (SHA-256, 100,000 iterations) and AES-GCM before being stored in `localStorage`.
- **Custom Passphrase Support**: Users can optionally supply a master passphrase for key derivation.


## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
