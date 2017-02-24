import {Injectable} from '@angular/core';
import { Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response} from '@angular/http';



@Injectable()
export class MainPageService{
    data: Observable<any>;
    constructor(private jsonp: Jsonp){ }
    loadData(){
        this.data= this.jsonp
            .get('http://192.168.1.34:8080/userapi/shop/2?callback=JSONP_CALLBACK')
            .map((resp:Response)=>{
                let data= resp.json();
                console.log("loadData", data);
                return data;
            }).share();
    }

    getData(){
        return this.data;
    }
}
