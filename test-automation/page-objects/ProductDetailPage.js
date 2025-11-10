const { $ } = require('@wdio/globals');

class ProductDetailPage {
    get productTitle() { return $('~product-title'); }
    get productPrice() { return $('~product-price'); }
    get productDescription() { return $('~product-description'); }
    get addToCartButton() { return $('~add-to-cart-button'); }
    get cartBadge() { return $('~cart-badge'); }

    async waitForPageLoad() {
        await this.productTitle.waitForDisplayed({ timeout: 10000 });
    }

    async getProductName() {
        return await this.productTitle.getText();
    }

    async getProductPrice() {
        return await this.productPrice.getText();
    }

    async clickAddToCart() {
        await this.addToCartButton.click();
    }

    async waitForAddToCartConfirmation() {
        await browser.pause(2000);
    }

    async getCartItemCount() {
        return await this.cartBadge.getText();
    }

    async isAddToCartEnabled() {
        return await this.addToCartButton.isEnabled();
    }
}

module.exports = ProductDetailPage;
