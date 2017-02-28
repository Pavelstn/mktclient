/**
 * Created by pavel on 25.02.17.
 */
import {Component} from '@angular/core';
import { MainPageService} from '../services/mainapge.service';
import 'rxjs/add/operator/map';
import { CartStoreService} from '../services/cart-store.service';
import { OrderStoreService} from '../services/order-store.service';
import { OrderForm} from './order-form';
import {Router} from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'cart',
    template: require('./cart-view.component.html'),
    providers: []
})

export class CartViewComponent {
    cartData={};
    orderForm:OrderForm;
    showOrderForm:boolean;
    constructor(private titleService: Title, private cartStoreService:CartStoreService, private router: Router, private orderStoreService:OrderStoreService){
        this.orderForm= new OrderForm();
        this.showOrderForm= false;
        this.cartStoreService.cartChange.subscribe((cartList)=>{
            this.cartData= cartList;
            console.log("this.cartData", this.cartData);
        });

    }
    ngOnInit(){
        this.cartData= this.cartStoreService.cartList;
        this.titleService.setTitle( "Корзина" );
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

    open_create_order_dialog(){
        this.showOrderForm= true;
    }
    update_values(){
        this.orderForm.checkValidateForm();
    }

    create_order(){
        //console.log("create order", );


        this.cartStoreService.createOrder(this.orderForm).subscribe((data) => {
           // console.log("data", data);
            this.cartStoreService.resetCart();

            this.orderStoreService.code=data.code;
            this.orderStoreService.comment=data.comment;
            this.orderStoreService.customer_name=data.customer_name;
            this.orderStoreService.customer_phone=data.customer_phone;
            this.orderStoreService.delivery_adress=data.delivery_adress;
            this.orderStoreService.summ=data.summ;
            this.orderStoreService.status=data.status;
            this.orderStoreService.list=data.list;

            this.router.navigate(['/order']);
        });

    }
}

