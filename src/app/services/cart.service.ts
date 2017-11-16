import {Injectable} from '@angular/core';
import {LocalStorage} from './../services/local-storage.service';
import {Subject} from 'rxjs';
import {Jsonp} from '@angular/http';
import {ConfigService} from '../services/config.service';
import {Observable} from 'rxjs/Observable';
import {Response, Headers, URLSearchParams} from '@angular/http';
import {Http} from '@angular/http';

@Injectable()
export class CartService {
  cartList: { l: any[], s: number };
  cartChange: Subject<any> = new Subject<any>();
  private localStorage: LocalStorage;

  constructor(private http: Http, private config: ConfigService) {
    this.localStorage = new LocalStorage('cart');
    this.cartList = {l: [], s: 0};
  }

  init() {
    this.get_cart_data();
    this.calculate_summ();
    this.put_cart_data();
  }

  addNewItem(id: number, c: any, t: any, i: any) {
    // id- id товара в базе
    // с- цена
    // a -количество
    // t- название (title)
    // i- ссылка на картинку
    // this.get_cart_data();

    if (this.check_exist(id) != null) {
      this.incrementNumber(id, 1);
    } else {
      this.cartList.l.push({id: id, a: 1, c: c, t: t, i: i});
      this.calculate_summ();
      this.put_cart_data();
    }
  }

  removeFromCart(id: number) {
    this.get_cart_data();
    let index = this.check_exist(id);
    if (index != null) {
      this.cartList.l.splice(index, 1);
    }
    this.calculate_summ();
    this.put_cart_data();
  }

  incrementNumber(id: number, n: number) {
    this.get_cart_data();
    let index = this.check_exist(id);

    if (index != null) {
      this.cartList.l[index].a += n;
      if (this.cartList.l[index].a < 1) {
        this.cartList.l[index].a = 1;
      }
      if (this.cartList.l[index].a > 999) {
        this.cartList.l[index].a = 999;
      }
    }

    this.calculate_summ();
    this.put_cart_data();
  }

  changeNumber(id: number, n: number) {
    this.get_cart_data();
    let index = this.check_exist(id);

    if (n < 1) {
      n = 1;
    }
    if (n > 999) {
      n = 999;
    }

    if (index != null) {
      this.cartList.l[index].a = n;

    }

    this.calculate_summ();
    this.put_cart_data();
  }

  private get_cart_data() {

    /*  this.cartList = this.localStorage.getData('cart_list');
      if (this.cartList == null) { // если такх данных в корзине еще нет, надо отдать структурированную пустую корзину
        this.cartList = {l: [], s: 0};
      }*/
    this.localStorage.getData('cart_list').then(resolve => {
        this.cartList = <any> resolve;
      },
      reject => {
        this.cartList = {l: [], s: 0};
      });

  }

  private put_cart_data() {
    this.localStorage.setData('cart_list', this.cartList).then(resolve => {
      this.cartChange.next(this.cartList);
    }, reject => {
      this.cartChange.next(this.cartList);
    });
  }

  private calculate_summ() {
    let summ = 0;
    for (let i = 0; i < this.cartList.l.length; i++) {
      summ += this.cartList.l[i].a * this.cartList.l[i].c;
    }
    this.cartList.s = summ;
  }

  get_cart_info() {
    let c = 0;
    for (let i = 0; i < this.cartList.l.length; i++) {
      c += this.cartList.l[i].a;
    }
    return {amount: c, costs: this.cartList.s};

  }

  check_exist(id: number): number {
    this.get_cart_data();
    for (let i = 0; i < this.cartList.l.length; i++) {
      if (this.cartList.l[i].id == id) {
        return i;
      }
    }
    return null;
  }

  reset_cart() {
    this.cartList = {l: [], s: 0};
    this.put_cart_data();
  }

  resetCart() {
    this.cartList.l = [];
    this.localStorage.resetStorage();
    this.calculate_summ();
    this.put_cart_data();
  }

  /*  createOrder(orderForm) {
      let cartList = [];
      for (let i = 0; i < this.cartList.l.length; i++) {
        cartList.push({id: this.cartList.l[i].id, a: this.cartList.l[i].a});
      }

      let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      let params = new URLSearchParams();
      params.set('shop_id', this.config.shop_id.toString());
      params.set('orderform', JSON.stringify(orderForm));
      params.set('cartlist', JSON.stringify(cartList));
      return this.http.post(this.config.dataServer + '/userapi/create_order', params.toString(), {headers: headers})
        .map(res => res.json())
        .catch((error: any) => {
          return Observable.throw(error);
        });
    }*/

}
