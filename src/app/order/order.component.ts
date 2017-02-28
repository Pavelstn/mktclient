/**
 * Created by pavel on 27.02.17.
 */
import {Component} from '@angular/core';
import { OrderStoreService} from '../services/order-store.service';
import { Title }     from '@angular/platform-browser';
@Component({
    selector: 'order',
    template: require('./order.component.html'),
    providers: []
})

export class OrderComponent {
    data={};
    constructor(private titleService: Title, public orderStoreService:OrderStoreService){ }
    ngOnInit(){
        this.titleService.setTitle( "Подробности заказа" );
    }
}
