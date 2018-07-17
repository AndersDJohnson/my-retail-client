import { Component, OnInit, Input } from '@angular/core';
import {MyRetail} from "../_services/my-retail.service";

@Component({
  selector: 'app-pickup-in-store-btn',
  templateUrl: './pickup-in-store-btn.component.html',
  styleUrls: ['./pickup-in-store-btn.component.scss']
})
export class PickupInStoreBtnComponent implements OnInit {
    
    @Input()
    public product: MyRetail.Product;
    
    public showBtn: boolean = false;

    constructor() { }

    ngOnInit() {
        this.showBtn = this.product.purchasingChannelCode === '0' || this.product.purchasingChannelCode === '2'
    }
    
    public onBtnClicked() {
        console.log('Pick up in store: ', this.product);
    }

}
