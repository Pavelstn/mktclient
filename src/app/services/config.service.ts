/**
 * Created by pavel on 28.02.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
    user_id: number = 1;
    shop_id: number = 3;
    dataServer: string = "http://mkt4u.ru";
    projetctName:string="SmartWatch";

    constructor() { }
}