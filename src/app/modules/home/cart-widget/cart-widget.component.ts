import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.sass']
})
export class CartWidgetComponent implements OnInit {

  constructor(private cs: CartService) {
  }

  public cartData = {l: [], s: 0};

  ngOnInit() {
    this.cs.cartChange.subscribe((cartList) => {
      this.cartData = cartList;
      console.log('this.cartData', this.cartData);
    });
  }

}
