/**
 * Created by pavel on 24.02.17.
 */
import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {DealDataService} from '../services/deal-data.service';
import { MainPageService} from '../services/mainapge.service';
import { CarouselModule } from 'ng2-bootstrap';
import { CartStoreService} from '../services/cart-store.service';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'dealview',
    template: require('./deal-view.component.html'),
    providers: [DealDataService]
})

export class DealViewComponent {
    id: number;
    dealData={};
    dealsList={};

    private subscription: Subscription;

    constructor(private titleService: Title, private activateRoute: ActivatedRoute, private dealDataService:DealDataService, private cartStoreService:CartStoreService , private mainPageService: MainPageService){
        this.subscription = activateRoute.params.subscribe(params=>{
            this.id=params['id'];
            this.dealDataService.loadData(this.id).subscribe((data) => {
                this.dealData=data;
                this.titleService.setTitle( data.title );
            });




        });


    }

    ngOnInit(){
        this.mainPageService.getData().subscribe((data) => {
            this.dealsList=data;
            // this.titleService.setTitle( data.name );
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    add_to_cart(id:number, c:any, t:any, i:any){
        this.cartStoreService.addNewItem(id, c, t, i);
    }


}
