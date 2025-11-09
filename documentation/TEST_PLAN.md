# Test Plan: Shopify Storefront Mobile App

## 1. Overview & Scope
**Application:** Shopify Storefront React Native App  
**Testing Focus:** Core shopping functionality across iOS & Android  
**Timeframe:** 4-hour assessment focus

## 2. Test Objectives
- Validate product browsing, cart management, and order calculations
- Ensure cross-platform consistency (iOS Simulator & Android Emulator)
- Identify functional defects in revenue-critical flows

## 3. Test Approach
**Automated (70%):** Core user journeys using WebdriverIO + Appium  
**Manual (30%):** Exploratory testing, usability, edge cases  
**Platforms:** iOS Simulator (iPhone 15), Android Emulator (Pixel 4)

## 4. Test Scenarios & Coverage

### Core Required Scenarios (100% Automated)
| Scenario | Test Case | Automated | Status |
|----------|-----------|-----------|---------|
| View product list | TC-001 | ✅ test-automation/tests/products/list.test.js | Implemented |
| View product details | TC-002 | ✅ test-automation/tests/products/details.test.js | Implemented |
| Add product to cart | TC-003 | ✅ test-automation/tests/cart/add.test.js | Implemented |
| Remove product from cart | TC-004 | ✅ test-automation/tests/cart/remove.test.js | Implemented |

### Additional Scenarios (Automated)
- Cart calculations (subtotal, tax, total)
- Empty cart state handling
- Multiple product management
- Navigation flow validation

## 5. Assumptions & Constraints
- App built and available as APK/IPA
- iOS Simulator & Android Emulator available
- Shopify API accessible with test products
- 4-hour time constraint for assessment

## 6. Entry/Exit Criteria
**Entry:** App built, emulators running, dependencies installed  
**Exit:** All core scenarios automated and executed, defects documented  
**Success:** 100% required scenarios automated and passing

## 7. Risk Analysis
**High:** Cart calculation accuracy, cross-platform consistency  
**Medium:** Network handling, image loading performance  
**Low:** UI alignment, minor visual issues
