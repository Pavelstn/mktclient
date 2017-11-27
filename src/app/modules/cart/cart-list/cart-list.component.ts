import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit {
  public cartData = {l: [], s: 0};

  constructor(private cs: CartService, private titleService: Title, public router: Router, private ls: LoadDataService) {
    this.cs.cartChange.subscribe((cartList) => {
      this.cartData = cartList;
      console.log('this.cartData', this.cartData);
      this.titleService.setTitle('Корзина');
    });
  }

  ngOnInit() {
    this.cs.init();


    this.ls.getMainPage();
    /*this.titleService.setTitle('Главная');
    this.updateMainPageData();
*/
    // а теперь подписываемся на изменение страницы
   /* this.ls.deals_listChange.subscribe((deals_list) => {
      this.updateMainPageData();
    });*/
  }


  delete_item(id: number) {
    this.cs.removeFromCart(id);
  }

  incrementNumber(id: number, n: number) {
    this.cs.incrementNumber(id, n);
  }

  number_change(id: number, n: number) {

    this.cs.changeNumber(id, n);
  }

  create_order() {
    this.router.navigateByUrl('/cart/checkout');
  }

}
