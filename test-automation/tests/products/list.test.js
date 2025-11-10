const { browser, $, $$, expect } = require('@wdio/globals');
const ProductListPage = require('../../page-objects/ProductListPage');

describe('Product List Tests', () => {
    let productListPage;

    before(async () => {
        productListPage = new ProductListPage();
    });

    it('should display product list with multiple products', async () => {
        await productListPage.open();
        await productListPage.waitForProductGrid();
        
        const productCount = await productListPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
        
        const firstProductName = await productListPage.getFirstProductName();
        expect(firstProductName).toBeTruthy();
    });

    it('should navigate to product details when product is clicked', async () => {
        await productListPage.open();
        await productListPage.clickFirstProduct();
        
        // Verify navigation to product details
        await expect($('~product-detail-page')).toBeDisplayed();
        await expect($('~product-title')).toBeDisplayed();
    });

    it('should display product images and prices', async () => {
        await productListPage.open();
        
        const hasProductImages = await productListPage.areProductImagesDisplayed();
        const hasProductPrices = await productListPage.areProductPricesDisplayed();
        
        expect(hasProductImages).toBe(true);
        expect(hasProductPrices).toBe(true);
    });
});
