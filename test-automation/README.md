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
