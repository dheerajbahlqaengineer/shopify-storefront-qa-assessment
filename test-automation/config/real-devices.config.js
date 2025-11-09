// Real device configurations for cloud testing platforms
const realDeviceConfig = {
  browserstack: {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    capabilities: {
      // iOS Real Devices
      'iPhone 14 Pro': {
        device: 'iPhone 14 Pro',
        os_version: '16',
        app: process.env.BROWSERSTACK_APP_URL
      },
      
      // Android Real Devices  
      'Samsung Galaxy S22': {
        device: 'Samsung Galaxy S22',
        os_version: '12.0',
        app: process.env.BROWSERSTACK_APP_URL
      }
    }
  },
  
  lambdatest: {
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    capabilities: {
      // Additional device configurations
      'Google Pixel 7': {
        deviceName: 'Google Pixel 7',
        platformVersion: '13',
        app: process.env.LT_APP_URL
      }
    }
  }
};

module.exports = realDeviceConfig;
