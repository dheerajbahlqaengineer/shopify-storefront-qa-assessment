# Defect Report: Cart Badge Inconsistency

## Basic Information
- **ID:** DEFECT-001
- **Severity:** Medium
- **Priority:** High  
- **Platform:** Both (iOS & Android)
- **Frequency:** 80% reproducible

## Defect Details
### Description
Cart badge counter shows inconsistent values when rapidly adding products to cart.

### Steps to Reproduce
1. Launch Shopify Storefront app
2. Navigate to any product details screen
3. Rapidly tap "Add to Cart" button 3 times within 2 seconds
4. Observe cart badge in tab bar
5. Navigate to Cart screen to verify actual quantity

### Expected Result
- Cart badge displays "3" immediately after 3 taps
- Cart screen shows quantity of 3 for the product

### Actual Result
- Cart badge shows "2" or inconsistent count
- Cart screen may show correct quantity (3) despite badge inaccuracy
- Badge sometimes doesn't update until screen navigation

### Evidence
**Screenshot:** `artifacts/screenshots/cart-badge-inconsistency.png`  
**Environment:** Android Emulator (Pixel 4, API 30), App version 1.0

### Impact Analysis
- **User Impact:** Medium - users may distrust cart accuracy
- **Business Impact:** High - could lead to abandoned carts
- **Workaround:** Users can manually verify cart contents

### Root Cause Suspected
Race condition in Redux state updates or asynchronous cart operations.
