/**
 * Created by pavel on 28.02.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
    user_id:number=1;
    shop_id:number=2;
    dataServer:string= "http://192.168.1.34:8080";
    constructor(){}
}
