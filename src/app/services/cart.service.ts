import {Injectable, EventEmitter} from '@angular/core';
import {LocalStorage} from './../services/local-storage.service';
// import {Subject} from 'rxjs';
import {Jsonp} from '@angular/http';
import {ConfigService} from '../services/config.service';
import {Observable} from 'rxjs/Observable';
import {Response, Headers, URLSearchParams} from '@angular/http';
import {Http} from '@angular/http';
import {CartData} from '../classes/cart-data';

@Injectable()
export class CartService {
  cartList = {l: [], s: 0};
  cartChange: any;
  private localStorage: LocalStorage;

  constructor(private http: Http, private config: ConfigService) {
    this.localStorage = new LocalStorage('cart');
    this.cartChange = new EventEmitter();
   // this.init();
    this.get_cart_data();
  }

  init() {


   // this.get_cart_data();
    this.cartChange.emit(this.cartList);
  }

  addNewItem(id: number, c: any, t: any, i: any) {
    // id- id товара в базе
    // с- цена
    // a -количество
    // t- название (title)
    // i- ссылка на картинку
    // this.get_cart_data();
    // this.cartChange.emit(this.cartList);
    if (this.check_exist(id) != null) {
      this.incrementNumber(id, 1);
      console.log('incrementNumber Item');
    } else {
      this.cartList.l.push({id: id, a: 1, c: c, t: t, i: i});
      this.cartList.s = this.calculate_summ();
      console.log('addNewItem', this.cartList);
      this.put_cart_data();

    }

  }

  private get_cart_data() {
    this.localStorage.getData('cart_list').then(resolve => {
      this.cartList = <any>resolve;
      this.cartList.s = this.calculate_summ();
      this.put_cart_data();
    }, reject => {
      console.log('Такого хранилища нет', reject);
      this.cartList = {l: [], s: 0};
    });
  }


  private put_cart_data() {
    this.localStorage.setData('cart_list', this.cartList).then(resolve => {
      this.cartChange.emit(this.cartList);
    }, reject => {
      console.log('Неудачное сохранение корзины', reject);
    });

  }

  private calculate_summ() {
    let summ = 0;
    for (let i = 0; i < this.cartList.l.length; i++) {
      summ += this.cartList.l[i].a * this.cartList.l[i].c;
    }
    return summ;
  }

  removeFromCart(id: number) {
    this.localStorage.getData('cart_list').then(resolve => {
      this.cartList = <any>resolve;
      let index = this.check_exist(id);
      if (index != null) {
        this.cartList.l.splice(index, 1);
      }
      this.cartList.s = this.calculate_summ();
      // this.put_cart_data();
    }, reject => {
      console.log('Такого хранилища нет', reject);
      this.cartList = {l: [], s: 0};
    });
  }


  incrementNumber(id: number, n: number) {
    this.localStorage.getData('cart_list').then(resolve => {
      this.cartList = <any>resolve;
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
      this.cartList.s = this.calculate_summ();
      // this.put_cart_data();

    }, reject => {
      console.log('Такого хранилища нет', reject);
      this.cartList = {l: [], s: 0};
    });
  }

  changeNumber(id: number, n: number) {
    this.localStorage.getData('cart_list').then(resolve => {
      this.cartList = <any>resolve;
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
      this.cartList.s = this.calculate_summ();
      this.put_cart_data();

    }, reject => {
      console.log('Такого хранилища нет', reject);
      this.cartList = {l: [], s: 0};
    });
  }


  check_exist(id: number): number {
    // this.get_cart_data();
    for (let i = 0; i < this.cartList.l.length; i++) {
      if (this.cartList.l[i].id === id) {
        return i;
      }
    }
    return null;
  }

  get_cart_info() {
    let c = 0;
    for (let i in this.cartList.l) {
      c += this.cartList.l[i].a;
    }
    return {amount: c, costs: this.cartList.s};
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

}
