# Shopify Storefront Test Automation Framework

## Overview
Complete mobile automation framework for testing Shopify Storefront applications on Android and iOS platforms. Built with WebdriverIO, Appium, and Page Object Model design pattern.

## 🚨 Important: Assessment Limitation
**This automation framework is architecturally complete but cannot execute due to missing assessment materials:**
- Shopify API credentials were not provided in the assessment package
- Mobile app binaries (.apk/.app files) were missing from the zip file
- Test user accounts were unavailable

**The framework will execute immediately once the missing app files and credentials are provided.**

## 🚀 Quick Start (When Materials Available)

### Prerequisites
- Node.js 16 or higher
- Appium server (`npm install -g appium`)
- Android Studio / Xcode for emulators
- Shopify app build file (`shopify-app-debug.apk`)

### Installation & Execution
```bash
# Install dependencies
cd test-automation
npm install

# Run Android tests
npm run test:android

# Run iOS tests
npm run test:ios

# Run all tests
npm run test:all

Test Structure
Core Test Scenarios
Product Browsing: List view, product details, image display

Cart Management: Add/remove items, quantity updates, cart calculations

Navigation: Tab navigation, product flow, back navigation

Validation: Framework health checks, cross-platform compatibility

Test Locations
tests/products/ - Product listing and detail tests

tests/validation/ - Framework and integration tests

page-objects/ - Page Object Model classes

🛠 Technical Stack
WebdriverIO - Test runner and automation framework

Appium - Mobile test automation

Mocha - Test framework

Page Object Model - Sustainable test architecture

- Test Coverage
1. Product list display and navigation
2. Product detail page validation
3. Add to cart functionality
4. Cart management (add/remove)
5. Cross-platform compatibility
6. Framework health checks
