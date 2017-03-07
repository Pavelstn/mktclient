/**
 * Created by pavel on 24.02.17.
 */
import {Component, Inject} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {DealDataService} from '../services/deal-data.service';
import { MainPageService} from '../services/mainapge.service';
import { CarouselModule } from 'ng2-bootstrap';
import { CartStoreService} from '../services/cart-store.service';
import {Title, DOCUMENT}     from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService, PageScrollConfig} from 'ng2-page-scroll';


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
   // private DOCUMENT: any;

    constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private titleService: Title, private activateRoute: ActivatedRoute, private dealDataService:DealDataService, private cartStoreService:CartStoreService , private mainPageService: MainPageService){
        PageScrollConfig.defaultScrollOffset = 70;
        PageScrollConfig.defaultDuration = 0;

        this.subscription = activateRoute.params.subscribe(params=>{
            this.id=params['id'];
            this.dealDataService.loadData(this.id).subscribe((data) => {
                this.dealData=data;
                this.titleService.setTitle( data.title );
                this.goToTop();
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

    public goToTop(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#deal-top');
        this.pageScrollService.start(pageScrollInstance);
    };


}
