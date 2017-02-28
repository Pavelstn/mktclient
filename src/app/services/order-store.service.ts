/**
 * Created by pavel on 28.02.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class OrderStoreService {
    code: string;
    comment: string;
    customer_phone: string;
    customer_name: string;
    delivery_adress: string;
    status: string;
    summ: string;
    list: any[];

    constructor() {
    }
}
