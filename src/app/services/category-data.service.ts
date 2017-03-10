/**
 * Created by pavel on 25.02.17.
 */
import {Injectable} from '@angular/core';
import { Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response} from '@angular/http';
import {ConfigService} from '../services/config.service';

@Injectable()

export class CategoryDataService{
    constructor(private jsonp: Jsonp,  private config:ConfigService){ }

    loadData(id:number){
        return this.jsonp
            .get(this.config.dataServer+'/userapi/category/'+this.config.shop_id.toString()+'/'+id+'/?callback=JSONP_CALLBACK')
            .map((resp:Response)=>{
                let data= resp.json();
                for(let index=0; index<data.deal_list.length; index++){
                    if(data.deal_list[index].rate==null){
                        data.deal_list[index].rate=0;
                    }
                }
                return data;
            });
    }
}
