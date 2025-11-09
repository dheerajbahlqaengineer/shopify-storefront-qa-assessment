# Configuration Management

## Expected Environment Variables

### Shopify API Configuration:
```bash
SHOPIFY_STOREFRONT_API_URL=your_store.myshopify.com/api/graphql
SHOPIFY_ACCESS_TOKEN=your_storefront_access_token

ANDROID_APP_PATH=./apps/shopify-app-debug.apk
IOS_APP_PATH=./apps/shopify-app.app
APPIUM_HOST=localhost
APPIUM_PORT=4723

Test Data Strategy:
Credentials parameterized via environment variables

Secure storage integration ready (AWS Secrets Manager, Azure Key Vault)

Dynamic test data generation framework implemented

Environment-specific configuration management

Security & Compliance
No hardcoded credentials in source code

Environment-based secret management

Audit-ready configuration tracking

Compliance with enterprise security standards
