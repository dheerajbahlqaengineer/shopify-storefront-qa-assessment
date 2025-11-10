const { $, $$ } = require('@wdio/globals');

class CartPage {
    get cartItems() { return $$('~cart-item'); }
    get firstCartItem() { return $('~cart-item-0'); }
    get removeFirstItemButton() { return $('~remove-item-0'); }
    get cartItemCount() { return $('~cart-item-count'); }
    get emptyCartMessage() { return $('~empty-cart-message'); }

    async open() {
        await browser.execute('mobile: deepLink', {
            url: 'shopifyapp://cart',
            package: 'com.shopify.storefront'
        });
        await this.waitForCartLoad();
    }

    async waitForCartLoad() {
        try {
            await this.cartItemCount.waitForDisplayed({ timeout: 5000 });
        } catch {
            await this.emptyCartMessage.waitForDisplayed({ timeout: 5000 });
        }
    }

    async getCartItems() {
        const items = await this.cartItems;
        return Promise.all(items.map(item => item.getAttribute('content-desc')));
    }

    async getCartItemCount() {
        return await this.cartItemCount.getText();
    }

    async removeFirstItem() {
        await this.removeFirstItemButton.click();
    }

    async waitForCartUpdate() {
        await browser.pause(1500);
    }
}

module.exports = CartPage;
