import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Mpdata } from '../main/mpdata';
import { Response} from '@angular/http';


@Injectable()
export class MainPageService{

   // constructor(private http: Http){ }
    constructor(private jsonp: Jsonp){ }

    getData(){
      //  return this.http.get('http://localhost:8080/userapi/shop/1')
/*        this.jsonp.get('http://localhost:8080/userapi/shop/2')
            .map(res => res.json())
            .subscribe(data => console.log(data));*/

    /*    return this.jsonp
            .get('http://localhost:8080/userapi/shop/2?callback=JSONP_CALLBACK')
            .map((response) => response.json());
            //.subscribe(data => console.log(data));*/

        //return this.jsonp.get('http://localhost:8080/userapi/shop/2?callback=JSONP_CALLBACK')


        return this.jsonp
            .get('http://192.168.1.34:8080/userapi/shop/2?callback=JSONP_CALLBACK')
            .map((resp:Response)=>{
                let data= resp.json();
                //let mpdata:Mpdata;
                //let mpdata= new Mpdata();
                //mpdata.name="aaaaaaa";
                console.log(data);
                //return {name:data.name};
                return data;
            });


    }
}
