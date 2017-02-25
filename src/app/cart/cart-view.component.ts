/**
 * Created by pavel on 25.02.17.
 */
import {Component} from '@angular/core';
import { MainPageService} from '../services/mainapge.service';
import 'rxjs/add/operator/map';
import { CartStoreService} from '../services/cart-store.service';

@Component({
    selector: 'cart',
    template: require('./cart-view.component.html'),
    providers: []
})

export class CartViewComponent {
    cartData={};
    constructor(private cartStoreService:CartStoreService){
        this.cartStoreService.cartChange.subscribe((cartList)=>{
            this.cartData= cartList;
            console.log("this.cartData", this.cartData);
        });

    }
    ngOnInit(){
        this.cartData= this.cartStoreService.cartList;
    }


    delete_item(id:number){
        console.log("id", id);
        this.cartStoreService.removeFromCart(id);
    }

    incrementNumber(id: number, n:number){
        this.cartStoreService.incrementNumber(id, n);
    }

    number_change(id: number, n:number){

        console.log("sdsd",id, n);
        this.cartStoreService.changeNumber(id, n);
    }
}