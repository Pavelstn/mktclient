import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deal-table',
  templateUrl: './deal-table.component.html',
  styleUrls: ['./deal-table.component.sass']
})
export class DealTableComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
