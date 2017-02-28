/**
 * Created by pavel on 24.02.17.
 */
import {Injectable} from '@angular/core';
import { Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response} from '@angular/http';
import {ConfigService} from '../services/config.service';


@Injectable()

export class DealDataService{
    constructor(private jsonp: Jsonp, private config:ConfigService){ }

    loadData(id:number){
        return this.jsonp
            .get(this.config.dataServer+'/userapi/deal/'+this.config.shop_id.toString()+'/'+id+'/?callback=JSONP_CALLBACK')
            .map((resp:Response)=>{
                let data= resp.json();
                console.log("deal Data", data);
                return data;
            });
    }
}
