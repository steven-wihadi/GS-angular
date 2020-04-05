import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../top-bar/product";
import { CartService } from "../../services/cart.service";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html'
})

export class ProductDetail implements OnInit {

    product;

    constructor( private route: ActivatedRoute, private cartService: CartService ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = products[params.get('productId')];
        });
    }

    addTocart(product){
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    }
}