import { TestBed, inject } from '@angular/core/testing';
import {MyRetail, MyRetailService} from "./my-retail.service";
import Product = MyRetail.Product;
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MyRetailProduct', () => {
    const data: any = require('../../assets/item-data.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MyRetailService]
        });
    });

    it('should populate product from example json', inject([MyRetailService], (service: MyRetailService) => {

        let product: Product = Product.fromJSON(data);
        expect(product.title).toBe('Ninja™ Professional Blender with Single Serve Blending Cups');
        expect(product.purchasingChannelCode).toBe('1');
        expect(product.offerPrice).toBe('$139.99');

    }));
});
