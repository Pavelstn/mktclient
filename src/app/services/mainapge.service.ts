import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Mpdata } from '../main/mpdata';
import { Response} from '@angular/http';


@Injectable()
export class MainPageService{
    data: Observable<Response>;
   // constructor(private http: Http){ }
    constructor(private jsonp: Jsonp){ }

    loadData(){
        this.data= this.jsonp
            .get('http://192.168.1.34:8080/userapi/shop/2?callback=JSONP_CALLBACK')
            .map((resp:Response)=>{
                let data= resp.json();
                console.log("loadData", data);
                //return {name:data.name};
                return data;
            });/*.subscribe((data)=>this.data=data);*/


    }

    getData(){
        return this.data;
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
