/**
 * Created by pavel on 27.02.17.
 */
import {Component} from '@angular/core';
import { OrderStoreService} from '../services/order-store.service';
@Component({
    selector: 'order',
    template: require('./order.component.html'),
    providers: []
})

export class OrderComponent {
    data={};
    constructor(public orderStoreService:OrderStoreService){ }
    ngOnInit(){

    }
}
