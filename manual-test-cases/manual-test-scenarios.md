# Manual Test Scenarios - Shopify Storefront App

## Test Strategy Overview
As the "last line of defense," this manual testing approach focuses on user experience, edge cases, and scenarios that automated tests might miss.

## 1. Collection Browsing & Navigation

### TC-001: Collections List Loading
**Objective:** Verify collections load and display correctly
**Steps:**
1. Launch the application
2. Observe the Collections tab (should be default)
3. Wait for collections to load (max 5 seconds)
4. Verify collection images and titles display properly
5. Scroll through the collections list

**Expected Results:**
- Collections load within 5 seconds
- Images display without distortion
- Titles are readable and not truncated
- Smooth scrolling performance

### TC-002: Collection Navigation
**Objective:** Verify tapping collections navigates to product list
**Steps:**
1. From collections list, tap any collection
2. Observe navigation transition
3. Verify product list screen loads

**Expected Results:**
- Navigation is smooth (under 1 second)
- Product list screen displays correct collection title
- Products begin loading immediately

## 2. Product Browsing Experience

### TC-003: Product Grid Display
**Objective:** Verify products display in proper 2-column layout
**Steps:**
1. Navigate to any product list
2. Verify products display in 2-column grid
3. Scroll through the product list
4. Check product card elements (image, title, price)

**Expected Results:**
- Consistent 2-column layout
- Images load without flickering
- Product information displays correctly
- Smooth scrolling without lag

### TC-004: Product Details Access
**Objective:** Verify product details screen functionality
**Steps:**
1. From product list, tap any product
2. Verify navigation to product details
3. Check all product information displays

**Expected Results:**
- Navigation completes within 1 second
- Product title, price, description visible
- Images display in high quality
- Add to Cart button is present and enabled

## 3. Cart Management & State

### TC-005: Add to Cart Functionality
**Objective:** Verify products can be added to cart
**Steps:**
1. Navigate to any product details screen
2. Tap "Add to Cart" button
3. Observe cart badge update in tab bar
4. Navigate to Cart tab to verify item added

**Expected Results:**
- Cart badge updates immediately with count "1"
- Item appears in cart with correct details
- Product image, title, price match original

### TC-006: Cart Quantity Management
**Objective:** Verify quantity can be increased/decreased
**Steps:**
1. Add an item to cart
2. Navigate to Cart screen
3. Tap "+" button to increase quantity
4. Tap "-" button to decrease quantity
5. Set quantity to 0 (if allowed)

**Expected Results:**
- Quantity updates immediately
- Subtotal recalculates correctly
- UI responds quickly to taps
- Minimum quantity of 1 enforced

### TC-007: Remove Item from Cart
**Objective:** Verify items can be removed from cart
**Steps:**
1. Add an item to cart
2. Navigate to Cart screen
3. Find and tap remove/delete button
4. Confirm removal if prompted

**Expected Results:**
- Item removed from cart immediately
- Cart badge updates or disappears
- Empty cart state displays properly
- Subtotal updates to $0.00

## 4. Order Calculations & Accuracy

### TC-008: Price Calculations
**Objective:** Verify all price calculations are accurate
**Steps:**
1. Add multiple different products to cart
2. Navigate to Cart screen
3. Verify subtotal calculation
4. Verify tax calculation (if applicable)
5. Verify total amount

**Expected Results:**
- Subtotal = sum of (price × quantity) for all items
- Tax = correct percentage of subtotal
- Total = Subtotal + Tax
- All calculations precise to 2 decimal places

## 5. Edge Cases & Error Handling

### TC-009: Empty States
**Objective:** Verify app handles empty states gracefully
**Steps:**
1. Remove all items from cart
2. Verify empty cart message displays
3. Test with collections that have no products
4. Test product details with missing information

**Expected Results:**
- Helpful empty state messages
- Clear call-to-action for empty states
- No crashes or error screens

### TC-010: Network Conditions
**Objective:** Verify app behavior under poor network
**Steps:**
1. Enable airplane mode
2. Launch app and attempt various actions
3. Disable airplane mode and verify recovery
4. Test with slow network simulation

**Expected Results:**
- Appropriate loading indicators
- Clear error messages for network issues
- Data reloads when connection restored
- No app crashes

## 6. Cross-Platform Consistency

### TC-011: Platform-Specific Testing
**Objective:** Verify consistent experience across platforms
**Steps:**
1. Test all above scenarios on both iOS and Android
2. Verify platform-specific UI patterns are followed
3. Check navigation gestures work correctly
4. Verify back button behavior (Android)

**Expected Results:**
- Consistent functionality across platforms
- Platform-appropriate UI elements
- Standard navigation patterns followed
- No platform-specific bugs

## Test Completion Criteria
- All test cases executed on both iOS and Android
- No critical or blocking issues found
- All calculations verified as accurate
- User experience meets quality standards
