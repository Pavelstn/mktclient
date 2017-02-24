/**
 * Created by pavel on 24.02.17.
 */
import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'dealview',
    template: require('./deal-view.component.html'),
    providers: []
})

export class DealViewComponent {
    id: number;
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute){
       // this.id = activateRoute.snapshot.params['id'];
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnInit(){
        console.log("загрузка", this.id);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
