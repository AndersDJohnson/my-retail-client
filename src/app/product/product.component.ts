import { Component, OnInit } from '@angular/core';
import {MyRetail, MyRetailService} from "../_services/my-retail.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    public product: MyRetail.Product;

    public quantity: number = 1;

    public fiveStars: Array<number> = Array(5).fill(0).map((x,i)=>i);

    constructor(private route: ActivatedRoute, private myRetailService: MyRetailService) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.myRetailService.getProductDetails(id).subscribe(json => {
            this.product = MyRetail.Product.fromJSON(json);
        })
    }

    public incQuantity() {
        this.quantity++;
    }

    public decQuantity() {
        this.quantity--;
    }

}

