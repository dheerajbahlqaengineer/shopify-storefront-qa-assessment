// Cross-platform configuration for iOS and Android testing
const crossPlatformConfig = {
  ios: {
    platformName: 'iOS',
    'appium:platformVersion': '17.0',
    'appium:deviceName': 'iPhone 15',
    'appium:automationName': 'XCUITest',
    'appium:app': './ios/build/Build/Products/Debug-iphonesimulator/storefrontDemo.app'
  },
  android: {
    platformName: 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel_4_API_30',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './android/app/build/outputs/apk/debug/app-debug.apk'
  }
};

module.exports = crossPlatformConfig;
