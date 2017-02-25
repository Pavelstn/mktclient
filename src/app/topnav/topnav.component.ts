/**
 * Created by pavel on 22.02.17.
 */
import {Component, Input} from '@angular/core';
import { MainPageService} from '../services/mainapge.service';
import { CartStoreService} from '../services/cart-store.service';

import 'rxjs/add/operator/map';
@Component({
    selector: 'topnav',
    template: require('./topnav.component.html'),
    providers: []
})

export class TopNavComponent{
    data={};
    cartData={};
    constructor(private mainPageService: MainPageService, private cartStoreService:CartStoreService){}
    ngOnInit(){
        this.mainPageService.getData().subscribe(data => this.data=data);
        this.cartData= this.cartStoreService.cartList;
    }
}
