import {ProductPage} from "./product.po";

describe('my-retail App', () => {
  let page: ProductPage;

  beforeEach(() => {
    page = new ProductPage();
  });

  it('should display correct price and hidden pick up button', () => {
    page.navigateTo(13860428);
    expect(page.getPrice()).toEqual('$139.99online price');
    expect(page.getCartButton().isPresent()).toBe(true);
    expect(page.getPickUpButton().isPresent()).toBe(false);
  });

  it('should display correct price and all buttons', () => {
    page.navigateTo(15117729);
    expect(page.getPrice()).toEqual('$129.99online price');
    expect(page.getCartButton().isPresent()).toBe(true);
    expect(page.getPickUpButton().isPresent()).toBe(true);
  });
});
