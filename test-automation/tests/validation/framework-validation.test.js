const { browser, $, expect } = require('@wdio/globals');
const fs = require('fs');
const path = require('path');

describe('Framework Architecture Validation', () => {
    it('should validate WebdriverIO configuration and dependencies', async () => {
        // Verify package.json exists and has required dependencies
        const packageJsonPath = path.join(__dirname, '../../package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        expect(packageJson.devDependencies).toHaveProperty('@wdio/cli');
        expect(packageJson.devDependencies).toHaveProperty('@wdio/appium-service');
        expect(packageJson.scripts).toHaveProperty('test:android');
    });

    it('should validate mobile app configuration files', async () => {
        // Check if config files exist
        const androidConfigPath = path.join(__dirname, '../../config/wdio.android.js');
        const androidConfigExists = fs.existsSync(androidConfigPath);
        
        expect(androidConfigExists).toBe(true);
        
        // Verify config structure
        const androidConfig = require(androidConfigPath);
        expect(androidConfig.config).toHaveProperty('capabilities');
        expect(androidConfig.config.capabilities[0]).toHaveProperty('platformName', 'Android');
    });

    it('should validate page objects structure', async () => {
        const pageObjectsDir = path.join(__dirname, '../../page-objects');
        const files = fs.readdirSync(pageObjectsDir);
        
        expect(files).toContain('ProductListPage.js');
        expect(files).toContain('ProductDetailPage.js');
        expect(files).toContain('CartPage.js');
        
        // Verify page objects export classes
        const ProductListPage = require('../../page-objects/ProductListPage');
        expect(typeof ProductListPage).toBe('function');
    });
});
