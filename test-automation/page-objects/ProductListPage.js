const { $, $$ } = require('@wdio/globals');

class ProductListPage {
    get productGrid() { return $('~product-grid'); }
    get productCards() { return $$('~product-card'); }
    get firstProduct() { return $('~product-card-0'); }
    get productImages() { return $$('~product-image'); }
    get productPrices() { return $$('~product-price'); }

    async open() {
        await browser.execute('mobile: deepLink', {
            url: 'shopifyapp://products',
            package: 'com.shopify.storefront'
        });
        await this.waitForProductGrid();
    }

    async waitForProductGrid() {
        await this.productGrid.waitForDisplayed({ timeout: 10000 });
    }

    async getProductCount() {
        return (await this.productCards).length;
    }

    async getFirstProductName() {
        return await this.firstProduct.getAttribute('content-desc');
    }

    async clickFirstProduct() {
        await this.firstProduct.click();
    }

    async areProductImagesDisplayed() {
        const images = await this.productImages;
        return images.length > 0 && await images[0].isDisplayed();
    }

    async areProductPricesDisplayed() {
        const prices = await this.productPrices;
        return prices.length > 0 && await prices[0].isDisplayed();
    }
}

module.exports = ProductListPage;
