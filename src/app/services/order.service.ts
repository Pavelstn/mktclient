import {Injectable} from '@angular/core';

import {ConfigService} from '../services/config.service';
import {Headers, Http} from '@angular/http';


@Injectable()
export class OrderService {

  code: string;
  comment: string;
  customer_phone: string;
  customer_name: string;
  delivery_adress: string;
  status: string;
  summ: string;
  list: any[];


  constructor(private config: ConfigService, private http: Http) { }


  createOrder(params, headers) {
    return this.http.post(this.config.dataServer + '/userapi/create_order', params.toString(), {headers: headers}).toPromise()
      .catch(this.errHandler);
  }


  private errHandler(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error);
  }

}
