import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cart-item-mobile',
  templateUrl: './cart-item-mobile.component.html',
  styleUrls: ['./cart-item-mobile.component.sass']
})
export class CartItemMobileComponent implements OnInit {
  @Input() data;
  @Input() value;
  @Output() number_change = new EventEmitter();
  @Output() delete_item = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  change() {
    this.number_change.emit({id: this.data.id, n: this.value});
  }

  delete() {
    this.delete_item.emit(this.data.id);
  }

}
