import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public cartData = {l: [], s: 0};

  constructor(private cs: CartService, private titleService: Title) {
    this.cs.cartChange.subscribe((cartList) => {
      this.cartData = cartList;
      console.log('this.cartData', this.cartData);
      this.titleService.setTitle('Корзина');
    });
  }

  ngOnInit() {

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

  create_order(){

  }


}
