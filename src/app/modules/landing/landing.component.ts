import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
// import {Title} from '@angular/platform-browser';
import {TitleService} from '../../services/title.service';
import {LoadDataService} from '../../services/load-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  mainpage = [];
  allSite;

  constructor(private route: ActivatedRoute, private ls: LoadDataService, private titleService: TitleService) {
  }

  ngOnInit() {
    this.ls.getMainPage();
    this.titleService.setTitle('Главная');
    this.updateMainPageData();

    // а теперь подписываемся на изменение страницы
    this.ls.deals_listChange.subscribe((deals_list) => {
      this.updateMainPageData();
    });

    console.log('ngOnInit Главная');
  }


  private updateMainPageData() {
    this.mainpage = [];
    for (let item of this.ls.deals_list) {
      if (item.on_top === true) {
        this.mainpage.push(item);
      }
    }

  }

}
