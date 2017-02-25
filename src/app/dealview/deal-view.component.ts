/**
 * Created by pavel on 24.02.17.
 */
import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {DealDataService} from '../services/deal-data.service';
import { CarouselModule } from 'ng2-bootstrap';
import { CartStoreService} from '../services/cart-store.service';


@Component({
    selector: 'dealview',
    template: require('./deal-view.component.html'),
    providers: [DealDataService]
})

export class DealViewComponent {
    id: number;
    dealData={};

    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute, private dealDataService:DealDataService, private cartStoreService:CartStoreService ){
       // this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
        this.subscription = activateRoute.params.subscribe(params=>{
            this.id=params['id'];
            this.dealDataService.loadData(this.id).subscribe(data => this.dealData=data);
        });


    }
    ngOnInit(){
        //console.log("загрузка", this.id);
       // this.dealDataService.loadData(this.id).subscribe(data => this.dealData=data);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    add_to_cart(id:number, c:any, t:any, i:any){
        console.log("id:", id);
        this.cartStoreService.addNewItem(id, c, t, i);
    }


}
