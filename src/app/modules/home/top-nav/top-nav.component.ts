import {Component, OnInit} from '@angular/core';
import {LoadDataService} from '../../../services/load-data.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {
  categories = [];

  constructor(public ls: LoadDataService) {
  }

  ngOnInit() {
    this.categories = this.ls.categories;
    this.ls.categoriesChange.subscribe((categories) => {
      this.categories = this.ls.categories;
    });
  }

}
