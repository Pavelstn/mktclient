import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import { MainPageService} from './services/mainapge.service';
import { CartStoreService} from './services/cart-store.service';
import { OrderStoreService} from './services/order-store.service';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    providers: [MainPageService, CartStoreService, OrderStoreService]
})

export class AppComponent implements OnInit {
    constructor(private mainPageService: MainPageService, private cartStoreService:CartStoreService, orderStoreService:OrderStoreService){}

    ngOnInit() {
        console.log('AppComponent initializing...');
        this.mainPageService.loadData();
        this.cartStoreService.init();
    }
}
