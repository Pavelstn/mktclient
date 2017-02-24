import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import { MainPageService} from './services/mainapge.service';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    providers: [MainPageService]
})

export class AppComponent implements OnInit {
    constructor(private mainPageService: MainPageService){}

    ngOnInit() {
        console.log('AppComponent initializing...');
        this.mainPageService.loadData();
    }
}
