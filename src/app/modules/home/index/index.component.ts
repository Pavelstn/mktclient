import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  mainpage;

  constructor(private route: ActivatedRoute, private ls: LoadDataService, private titleService: Title) {
  }

  ngOnInit() {
    this.mainpage = this.route.snapshot.data['mainPage'];
    this.titleService.setTitle('Главная');
  }

}
