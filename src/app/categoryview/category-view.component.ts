/**
 * Created by pavel on 24.02.17.
 */
import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'categoryview',
    template: require('./category-view.component.html'),
    providers: []
})

export class CategoryViewComponent {
    id: number;
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnInit(){
        console.log("загрузка", this.id);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
