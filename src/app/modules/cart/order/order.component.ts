import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {TitleService} from '../../../services/title.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  public cartData = {l: [], s: 0};

  constructor(public os: OrderService,
              private titleService: TitleService,
              public router: Router) {
  }

  ngOnInit() {
    this.titleService.setTitle('Подробности заказа');
    this.cartData = this.os.cartData;
    if (this.os.summ === '') {// пустой список, редирект на главную
      this.router.navigate(['/']);
    }
  }

}
