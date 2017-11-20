import {Injectable} from '@angular/core';

import {ConfigService} from '../services/config.service';
import {Headers, Http} from '@angular/http';


@Injectable()
export class OrderService {

  code = '';
  comment = '';
  customer_phone = '';
  customer_name = '';
  delivery_adress = '';
  status = '';
  summ = '';
  cartData;


  constructor(private config: ConfigService, private http: Http) {
    this.cartData = {l: [], s: 0};
  }


  createOrder(params, headers) {
    return this.http.post(this.config.dataServer + '/userapi/create_order', params.toString(), {headers: headers}).toPromise()
      .catch(this.errHandler);
  }


  private errHandler(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error);
  }

}
