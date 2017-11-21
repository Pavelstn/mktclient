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
  mainpage = [];
  allSite;

  constructor(private route: ActivatedRoute, private ls: LoadDataService, private titleService: Title) {
  }

  ngOnInit() {
    this.ls.getMainPage();
    this.titleService.setTitle('Главная');
    this.updateMainPageData();

    // а теперь подписываемся на изменение страницы
    this.ls.deals_listChange.subscribe((deals_list) => {
      this.updateMainPageData();
    });
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
