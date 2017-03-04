/**
 * Created by pavel on 22.02.17.
 */
import {Component, Input} from '@angular/core';
import { MainPageService} from '../services/mainapge.service';
import {ConfigService} from '../services/config.service';

import 'rxjs/add/operator/map';
@Component({
    selector: 'topnav',
    template: require('./topnav.component.html'),
    providers: []
})

export class TopNavComponent{
    data={};

    constructor(private mainPageService: MainPageService,  public config: ConfigService){

    }
    ngOnInit(){
        this.mainPageService.getData().subscribe(data => this.data=data);
    }

    ngOnDestroy() {

    }
}
