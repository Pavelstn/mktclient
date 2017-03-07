/**
 * Created by pavel on 24.02.17.
 */
import {Component, Inject} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {CategoryDataService} from '../services/category-data.service';
import { Title, DOCUMENT}     from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService, PageScrollConfig} from 'ng2-page-scroll';

@Component({
    selector: 'categoryview',
    template: require('./category-view.component.html'),
    providers: [CategoryDataService]
})

export class CategoryViewComponent {
    id: number;
    private subscription: Subscription;
    categoryData={};
    constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private titleService: Title, private activateRoute: ActivatedRoute, private categoryDataService:CategoryDataService){
        PageScrollConfig.defaultScrollOffset = 70;
        PageScrollConfig.defaultDuration = 0;
        this.subscription = activateRoute.params.subscribe(params=>{
            this.id=params['id'];
            this.categoryDataService.loadData(this.id).subscribe((data) => {
                this.categoryData=data;
                this.titleService.setTitle( data.cat_name );
                this.goToTop();
            });
        });
    }
    ngOnInit(){
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    public goToTop(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#category-top');
        this.pageScrollService.start(pageScrollInstance);
    };
}
