import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {

  @Input() data = {};

  constructor() {
  }

  ngOnInit() {
  }

  add_to_cart(id){
    console.log('id', id);
  }


}
