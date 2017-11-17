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
  // А что вообще надо для корзины?
  // добавление/ удаление товара
  // увеличение/ уменьшение количества единиц товара
  // сохранение данных в локальном хранилище

  // запускаем сервис, открываем локальное хранилище, берем оттуда данные (если они есть) записываем в переменные сервиса


  cartList = {l: [], s: 0};
  // cartChange: Subject<any> = new Subject<any>();
  cartChange: any;
  private localStorage: LocalStorage;

  constructor(private http: Http, private config: ConfigService) {
    // console.log('А сколько раз у нас запускается синглтон?');
    this.localStorage = new LocalStorage('cart');
    this.cartChange = new EventEmitter();
     this.init();
  }

  init() {


    this.get_cart_data();
  }

  /*
    private get_cart_data() {

      this.localStorage.getData('cart_list').then(resolve => {
          this.cartList = <CartData> resolve;
          console.log('get_cart_data this.cartList', this.cartList);

        },
        reject => {
          console.log('Случилось очень странное событие, и это надо отметить');
          this.cartList = {l: [], s: 0};
        });

    }
  */


  addNewItem(id: number, c: any, t: any, i: any) {
    // id- id товара в базе
    // с- цена
    // a -количество
    // t- название (title)
    // i- ссылка на картинку
    // this.get_cart_data();
    this.cartChange.emit(this.cartList);
  }

  private get_cart_data() {
    this.localStorage.getData('cart_list').then(resolve => {
      this.cartList = <any>resolve;
      console.log('get_cart_data', this.cartList);
      this.cartList.s = this.calculate_summ();
      this.put_cart_data();
    }, reject => {
      console.log('Такого хранилища нет', reject);
      this.cartList = {l: [], s: 0};
    });
  }


  private put_cart_data() {
    this.localStorage.setData('cart_list', this.cartList);
    // this.cartChange.next(this.cartList);
    this.cartChange.emit(this.cartList);
    console.log('put_cart_data this.cartList', this.cartList);
  }

  private calculate_summ() {
    let summ = 0;
    for (let i = 0; i < this.cartList.l.length; i++) {
      summ += this.cartList.l[i].a * this.cartList.l[i].c;
    }
    return summ;
  }


}
