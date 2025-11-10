const { browser, $, $$, expect } = require('@wdio/globals');
const ProductListPage = require('../../page-objects/ProductListPage');
const ProductDetailPage = require('../../page-objects/ProductDetailPage');
const CartPage = require('../../page-objects/CartPage');

describe('Real Product Tests - Core Shopping Flow', () => {
    let productListPage, productDetailPage, cartPage;

    before(async () => {
        productListPage = new ProductListPage();
        productDetailPage = new ProductDetailPage();
        cartPage = new CartPage();
    });

    it('should complete add to cart workflow', async () => {
        // Navigate to product list
        await productListPage.open();
        await productListPage.waitForProductGrid();
        
        // Select first product
        await productListPage.clickFirstProduct();
        await productDetailPage.waitForPageLoad();
        
        // Get product details
        const productName = await productDetailPage.getProductName();
        const productPrice = await productDetailPage.getProductPrice();
        
        // Add to cart
        await productDetailPage.clickAddToCart();
        await productDetailPage.waitForAddToCartConfirmation();
        
        // Verify cart updates
        const cartCount = await productDetailPage.getCartItemCount();
        expect(cartCount).toBe('1');
        
        // Navigate to cart and verify item
        await cartPage.open();
        const cartItems = await cartPage.getCartItems();
        expect(cartItems).toContain(productName);
    });

    it('should remove product from cart', async () => {
        await cartPage.open();
        const initialItemCount = await cartPage.getCartItemCount();
        
        if (parseInt(initialItemCount) > 0) {
            await cartPage.removeFirstItem();
            await cartPage.waitForCartUpdate();
            
            const finalItemCount = await cartPage.getCartItemCount();
            expect(parseInt(finalItemCount)).toBeLessThan(parseInt(initialItemCount));
        }
    });

    it('should verify product details page elements', async () => {
        await productListPage.open();
        await productListPage.clickFirstProduct();
        
        await expect(productDetailPage.productTitle).toBeDisplayed();
        await expect(productDetailPage.productPrice).toBeDisplayed();
        await expect(productDetailPage.productDescription).toBeDisplayed();
        await expect(productDetailPage.addToCartButton).toBeDisplayed();
        
        const isAddToCartEnabled = await productDetailPage.isAddToCartEnabled();
        expect(isAddToCartEnabled).toBe(true);
    });
});
