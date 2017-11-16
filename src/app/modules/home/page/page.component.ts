import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pages;
  constructor(private route: ActivatedRoute, private ls: LoadDataService) { }

  ngOnInit() {
    this.pages = this.route.snapshot.data['page'];
    console.log('this.pages', this.pages);
  }

}
