import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {CartService} from '../../../services/cart.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {LoadDataService} from '../../../services/load-data.service';
import {ConfigService} from '../../../services/config.service';
import {OrderService} from '../../../services/order.service';
import {Response, Headers, URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  public cartData = {l: [], s: 0};
  orderForm: FormGroup;
  sendDataInProgress;

  constructor(private fb: FormBuilder,
              private cs: CartService,
              private titleService: Title,
              public router: Router,
              private ls: LoadDataService,
              private config: ConfigService,
              private os: OrderService) {
    this.titleService.setTitle('Оформление заказа');

    this.orderForm = fb.group({
      'customer_name': new FormControl('', [Validators.required]),
      'customer_phone': new FormControl('', [Validators.required]),
      'delivery_adress': new FormControl('', [Validators.required]),
      'comment': new FormControl('', []),
    });

  }

  ngOnInit() {
    this.sendDataInProgress = false;
    this.cartData = JSON.parse(JSON.stringify(this.cs.cartList));
  }

  submitForm() {
    this.sendDataInProgress = true; // Блокируем кнопку до ответа сервера
    let sendcartList = [];
    for (let i = 0; i < this.cartData.l.length; i++) {
      sendcartList.push({id: this.cartData.l[i].id, a: this.cartData.l[i].a});
    }
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let params = new URLSearchParams();
    params.append('shop_id', this.config.shop_id.toString());
    params.append('orderform', JSON.stringify(this.orderForm.value));
    params.append('cartlist', JSON.stringify(sendcartList));

    this.os.createOrder(params, headers).then(resolve => {
      console.log('resolve', resolve);
      this.sendDataInProgress = false;
      // this.router.navigate(['/home']);

/*      this.os.code= data.code;
      this.os.comment=data.comment;
      this.os.customer_name=data.customer_name;
      this.os.customer_phone=data.customer_phone;
      this.os.delivery_adress=data.delivery_adress;
      this.os.summ=data.summ;
      this.os.status=data.status;
      this.os.list=data.list;*/

      this.cs.resetCart();
    }, reject => {
      alert('Возникла ошибка, попробуйте перезагрузить страницу и попробовать снова');
      this.sendDataInProgress = false;
    });
  }

}
