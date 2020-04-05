import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";

@Component({
    selector: "app-cart-component",
    templateUrl: "./cart.component.html"
})

export class CartComponent implements OnInit {

    items;

    constructor( private cartService: CartService ) {}

    ngOnInit() {
        this.items = this.cartService.getItems();
    }

}