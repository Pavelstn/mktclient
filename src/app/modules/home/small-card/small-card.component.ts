import {Component, OnInit, Input} from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {

  @Input() data;

  constructor(private cs: CartService) {
  }

  ngOnInit() {
  }

  add_to_cart(id: number, c: any, t: any, i: any) {
    this.cs.addNewItem(id, c, t, i);
  }


}
