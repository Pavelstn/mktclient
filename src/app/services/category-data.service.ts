/**
 * Created by pavel on 25.02.17.
 */
import {Injectable} from '@angular/core';
import { Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response} from '@angular/http';

@Injectable()

export class CategoryDataService{
    constructor(private jsonp: Jsonp){ }

    loadData(id:number){
        return this.jsonp
            .get('http://192.168.1.34:8080/userapi/category/2/'+id+'/?callback=JSONP_CALLBACK')
            .map((resp:Response)=>{
                let data= resp.json();
                console.log("deal Data", data);
                return data;
            });
    }
}
