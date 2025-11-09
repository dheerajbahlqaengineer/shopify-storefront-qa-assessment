# Test Plan: Shopify Storefront Mobile App

## 1. Overview
This test plan outlines the comprehensive testing strategy for the Shopify Storefront React Native application provided in the assessment.

## 2. Test Objectives
- Validate core shopping functionality (browsing, cart management, calculations)
- Ensure cross-platform consistency (iOS & Android)
- Identify functional defects and usability issues
- Verify data integrity and calculation accuracy

## 3. Key Test Scenarios

### 3.1 Core Functional Scenarios
1. **Collection Browsing**
   - Load and display collections list
   - Navigate to product lists
   - Handle empty collections state

2. **Product Discovery**
   - Two-column product grid display
   - Product details access and information display
   - Image loading and rendering

3. **Cart Management**
   - Add products to cart
   - Update quantities
   - Remove items from cart
   - Cart badge counter updates

4. **Order Calculations**
   - Subtotal calculations
   - Tax calculations
   - Total amount accuracy

### 3.2 Edge Cases & Negative Testing
- Network failure scenarios
- Empty cart state handling
- Rapid sequential user actions
- Products with missing data
- Cross-platform behavior differences

## 4. Testing Approach

### 4.1 Automated Testing (40%)
- **Tools**: Detox + WebdriverIO + Appium
- **Coverage**: Core user journeys and regression tests
- **Platforms**: iOS Simulator & Android Emulator

### 4.2 Manual Testing (60%)
- **Focus**: Exploratory testing, usability, edge cases
- **Coverage**: Platform-specific behaviors, visual validation
- **Documentation**: Detailed bug reports with evidence

## 5. Assumptions
- Shopify Storefront API is available and stable
- Test products exist in the connected store
- App supports both iOS and Android platforms
- No authentication required for basic shopping flows

## 6. Success Criteria
- All core shopping scenarios function correctly
- No critical defects in revenue-impacting flows
- Cross-platform consistency achieved
- Automated test suite with 90%+ pass rate

## 7. Test Environment
- **iOS**: iPhone 15 Simulator (iOS 17)
- **Android**: Pixel 4 Emulator (API 30)
- **React Native**: 0.72.6
- **Testing Tools**: Detox, Appium, WebdriverIO

## 8. Risk Assessment
### High Risk
- Cart calculation inaccuracies
- Checkout flow failures
- Data persistence issues

### Medium Risk
- UI rendering inconsistencies
- Performance degradation
- Navigation flow breaks
