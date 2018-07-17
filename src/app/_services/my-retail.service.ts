import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class MyRetailService {

    constructor(private http: HttpClient) {}

    public getProductDetails(id: number): Observable<MyRetail.Product> {
        return this.http.get<MyRetail.Product>(`${environment.apiUrl}/product/sample/${id}`);
    }

}
export module MyRetail {

    export class Product {

        public id: number;
        public title: string;
        public images: Array<string>;
        public imageCount: number;
        public features: Array<string>;
        public offerPrice: string;
        public purchasingChannelCode: string;

        public static fromJSON(json: any): Product {
            let result = new Product();
            let entry = json.CatalogEntryView[0];
            result.id = entry.id;
            result.title = entry.title;
            result.purchasingChannelCode = entry.purchasingChannelCode;
            let images = entry.Images[0];
            result.images = images.AlternateImages.map(img => {
              return img.image;
            });
            result.images.push(images.PrimaryImage[0].image);

            result.imageCount = entry.imageCount;
            result.features = entry.ItemDescription[0].features.map(feature => {
              return feature;
            });
            result.offerPrice = entry.Offers[0].OfferPrice[0].formattedPriceValue;

            return result;
        }
    }
}
