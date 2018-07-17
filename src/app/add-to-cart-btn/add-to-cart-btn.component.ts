import { Component, OnInit, Input } from '@angular/core';
import {MyRetail} from "../_services/my-retail.service";

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss']
})
export class AddToCartBtnComponent implements OnInit {
    
    @Input()
    public product: MyRetail.Product;
    
    public showBtn: boolean = false;
    
    constructor() { }

    ngOnInit() {
        this.showBtn = this.product.purchasingChannelCode === '0' || this.product.purchasingChannelCode === '1'
    }

    public onBtnClicked() {
        console.log('Add to cart: ', this.product);
    }

}
