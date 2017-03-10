/**
 * Created by pavel on 22.02.17.
 */

import {Component, Input} from '@angular/core';
import { CartStoreService} from '../services/cart-store.service';

@Component({
    selector: 'smallcard',
    template: require('./smallcard.component.html'),

})

export class SmallCardComponent{
    @Input() data = {};

    constructor(private cartStoreService:CartStoreService){}

    add_to_cart(id:number, c:any, t:any, i:any){
        this.cartStoreService.addNewItem(id, c, t, i);
    }
}
