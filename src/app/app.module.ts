import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {MyRetailService} from "./_services/my-retail.service";
import {HttpClientModule} from "@angular/common/http";
import { AddToCartBtnComponent } from './add-to-cart-btn/add-to-cart-btn.component';
import { PickupInStoreBtnComponent } from './pickup-in-store-btn/pickup-in-store-btn.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        AddToCartBtnComponent,
        PickupInStoreBtnComponent,
        ImageCarouselComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxGalleryModule
    ],
    providers: [
        MyRetailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
