import { browser, by, element } from 'protractor';

export class ProductPage {
  navigateTo(id) {
    return browser.get(`/product/${id}`);
  }

  getPrice() {
    return element(by.css('app-root div.price')).getText();
  }

  getCartButton() {
    return element(by.css('app-add-to-cart-btn button'));
  }

  getPickUpButton() {
    return element(by.css('app-pickup-in-store-btn button'));
  }
}
