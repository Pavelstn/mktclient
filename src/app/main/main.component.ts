/**
 * Created by pavel on 21.02.17.
 */
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { Response} from '@angular/http';
import { MainPageService} from '../services/mainapge.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


//import { SmallCardComponent} from '../smallcard/smallcard.component';

import { Mpdata } from './mpdata';

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    providers: [MainPageService]
})

export class MainComponent {
    data2="asdasdas";
    //data: Mpdata;
    data={};
    constructor(private mainPageService: MainPageService){
        //mainPageService.getData();
       // this.data= new Mpdata();
    }
    //data:any;

    ngOnInit(){
       // console.log("asdasd", this.mainPageService.getData());
       // this.mainPageService.getData()
      //      .subscribe(data => this.data=data);
            //.subscribe(data => console.log(data));
            //
            // .subscribe((data: Response) => this.data=data.json());

        //this.mainPageService.getData().subscribe((data: Response) => this.data=data.json());
       // this.mainPageService.getData().subscribe((data: Response) => console.log(data));

        // this.mainPageService.getData()
        //     .subscribe(response => this.data = response);
        //
        // console.log("this.data",this.data);


        this.mainPageService.getData().subscribe((data)=>this.data=data);
    }





}
