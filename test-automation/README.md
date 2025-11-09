# 🚀 Executable Test Automation

## Quick Start (5 minutes to running tests)

```bash
# 1. Clone and setup
git clone https://github.com/dheerajbahlqaengineer/shopify-storefront-qa-assessment
cd shopify-storefront-qa-assessment/test-automation

# 2. Install dependencies
npm install

# 3. Setup Android Emulator
# - Open Android Studio
# - Create Pixel 4 API 30 emulator
# - Start emulator

# 4. Build Shopify app and place APK in apps/
# - Build command: cd ../storefrontDemo && npx react-native run-android
# - Copy APK to test-automation/apps/shopify-app-debug.apk

# 5. Run tests
npm run test:android
Required Setup
Node.js 16+

Android Studio with emulator

Built Shopify APK in apps/ folder

Test Execution Evidence
Check ../artifacts/ folder for:

Screenshots of test execution

Defect evidence with reproduction steps

CI workflow configuration

Core Test Scenarios (Verified Working)
✅ View product list

✅ View product details

✅ Add product to cart

✅ Remove product from cart

✅ Cart calculations

✅ Navigation flows

Defects Found & Documented
DEFECT-001: Cart badge inconsistency

DEFECT-002: iOS navigation styling
