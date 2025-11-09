exports.config = {
    runner: 'local',
    specs: [
        './tests/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Pixel_4_API_30',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.ANDROID_APP_PATH || './apps/shopify-app-debug.apk',
        'appium:appWaitActivity': 'com.shopify.storefront.MainActivity',
        'appium:newCommandTimeout': 300
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
