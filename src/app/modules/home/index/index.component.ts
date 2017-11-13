import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  mainpage;
  constructor(private route: ActivatedRoute) {
    this.mainpage = this.route.snapshot.data['mainpage'];
  }

  ngOnInit() {
    console.log('this.mainpage', this.mainpage);
  }

}
