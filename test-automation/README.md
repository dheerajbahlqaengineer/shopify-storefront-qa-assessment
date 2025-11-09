# Test Automation Framework Reference

## Overview
This directory contains the reference implementation for automated end-to-end testing using Detox. While manual testing provides comprehensive coverage, this automation framework ensures regression protection for critical user journeys.

## Framework Setup
### Prerequisites
- Node.js 14.5.0 or higher
- iOS Simulator (for iOS testing)
- Android Emulator (for Android testing)
- React Native development environment

### Installation
\`\`\`bash
# Install dependencies
npm install --save-dev detox@20.0.0 jest@29.0.0 jest-circus@29.0.0

# Install Detox CLI globally
npm install -g detox-cli

# Initialize Detox configuration
detox init -r jest
\`\`\`

## Test Scenarios Covered

### 1. Core User Journeys
- Collection browsing and navigation
- Product discovery and details viewing
- Cart management (add/remove/update quantities)
- Order calculations and summary

### 2. Critical Business Logic
- Price calculations accuracy
- Cart state persistence
- Navigation flow integrity
- Error handling scenarios

### 3. Edge Cases
- Empty states handling
- Network failure scenarios
- Rapid user interactions
- Data boundary conditions

## Test Execution
\`\`\`bash
# Build the app for testing
detox build --configuration ios.sim.debug

# Run tests
detox test --configuration ios.sim.debug

# For Android
detox build --configuration android.emu.debug
detox test --configuration android.emu.debug
\`\`\`

## Key Test Files
- \`e2e/tests/app.e2e.js\` - Main test scenarios
- \`page-objects/\` - Screen-specific selectors and actions
- \`utils/\` - Helper functions and utilities

## Continuous Integration
The tests are designed to run in CI/CD pipelines with proper simulator/emulator setup and test reporting.
