/**
 * Created by pavel on 25.02.17.
 */
import {Component, Inject} from '@angular/core';
import { MainPageService} from '../services/mainapge.service';
import 'rxjs/add/operator/map';
import { CartStoreService} from '../services/cart-store.service';
import { OrderStoreService} from '../services/order-store.service';
import { OrderForm} from './order-form';
import {Router} from '@angular/router';
import { Title, DOCUMENT }     from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService, PageScrollConfig} from 'ng2-page-scroll';


@Component({
    selector: 'cart',
    template: require('./cart-view.component.html'),
    providers: []
})

export class CartViewComponent {
    cartData={};
    orderForm:OrderForm;
    showOrderForm:boolean;
    constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private titleService: Title, private cartStoreService:CartStoreService, private router: Router, private orderStoreService:OrderStoreService){
        //PageScrollConfig.defaultScrollOffset = -70;
        PageScrollConfig.defaultDuration = 1250;

        this.orderForm= new OrderForm();
        this.showOrderForm= false;
        this.cartStoreService.cartChange.subscribe((cartList)=>{
            this.cartData= cartList;
        });

    }
    ngOnInit(){
        this.cartData= this.cartStoreService.cartList;
        this.titleService.setTitle( "Корзина" );
    }

    delete_item(id:number){
        this.cartStoreService.removeFromCart(id);
    }

    incrementNumber(id: number, n:number){
        this.cartStoreService.incrementNumber(id, n);
    }

    number_change(id: number, n:number){

        this.cartStoreService.changeNumber(id, n);
    }

    open_create_order_dialog(){
        this.showOrderForm= true;
        this.goToBottom()
    }
    update_values(){
        this.orderForm.checkValidateForm();
    }

    create_order(){
        this.cartStoreService.createOrder(this.orderForm).subscribe((data) => {
            if(data.status==1){
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
            }else{
                alert("Возникла ошибка, попробуйте перезагрузить страницу и попробовать снова")
            }

        });
    }

    public goToBottom(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#order_dialog');
        this.pageScrollService.start(pageScrollInstance);
    };
}

