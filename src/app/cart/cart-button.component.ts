/**
 * Created by pavel on 28.02.17.
 */
import {Component} from '@angular/core';
import {CartStoreService} from '../services/cart-store.service';
import 'rxjs/add/operator/map';
@Component({
    selector: 'cartbutton',
    template: require('./cart-button.component.html'),
    providers: []
})

export class CartButtonComponent {
    cartData = {};

    constructor(private cartStoreService: CartStoreService) {
        this.cartStoreService.cartChange.subscribe((cartList) => {
            this.cartData = cartList
        });
    }
}
