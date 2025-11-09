const ProductsPage = require('../../pageobjects/products.page');

describe('Product List View', () => {
    beforeEach(async () => {
        await ProductsPage.open();
    });

    it('should display product list with images and prices', async () => {
        // Take screenshot as evidence
        await browser.saveScreenshot('./artifacts/screenshots/product-list-loaded.png');
        
        const products = await ProductsPage.getProductCards();
        expect(products.length).toBeGreaterThan(0);
        
        const firstProduct = products[0];
        expect(await firstProduct.image.isDisplayed()).toBe(true);
        expect(await firstProduct.title.isDisplayed()).toBe(true);
        expect(await firstProduct.price.isDisplayed()).toBe(true);
        
        console.log('✅ Product list test executed successfully');
    });

    it('should navigate to product details when product is tapped', async () => {
        await ProductsPage.selectFirstProduct();
        
        // Verify navigation occurred
        const productDetails = await $('~product-details-screen');
        await expect(productDetails).toBeDisplayed();
        
        await browser.saveScreenshot('./artifacts/screenshots/product-details-navigation.png');
        console.log('✅ Product details navigation test executed successfully');
    });
});
