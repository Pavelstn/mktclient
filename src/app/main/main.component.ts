/**
 * Created by pavel on 21.02.17.
 */
import {Component} from '@angular/core';
import { MainPageService} from '../services/mainapge.service';
import { Title }     from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    providers: []
})

export class MainComponent {
    data={};
    constructor(private titleService: Title, private mainPageService: MainPageService){ }
    ngOnInit(){
        this.mainPageService.getData().subscribe((data) => {
            this.data=data;
            this.titleService.setTitle( data.name );
        });

    }
}
