/**
 * Created by pavel on 24.02.17.
 */
import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {CategoryDataService} from '../services/category-data.service';

@Component({
    selector: 'categoryview',
    template: require('./category-view.component.html'),
    providers: [CategoryDataService]
})

export class CategoryViewComponent {
    id: number;
    private subscription: Subscription;
    categoryData={};
    constructor(private activateRoute: ActivatedRoute, private categoryDataService:CategoryDataService){
       // this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
        this.subscription = activateRoute.params.subscribe(params=>{
            this.id=params['id'];
            this.categoryDataService.loadData(this.id).subscribe(data => this.categoryData=data);
        });
    }
    ngOnInit(){
       // console.log("загрузка", this.id);
       // this.categoryDataService.loadData(this.id).subscribe(data => this.categoryData=data);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
