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
    // this.allSite = this.route.snapshot.data['mainPage'];
    // this.ls.getMainPage();
    // console.log('ddddddddddd');
    /*this.ls.getMainPage().subscribe((data) => {
      console.log('data', data);

    });*/
    /*console.log('this.allSite', this.allSite);
    console.log('his.allSite.deals_list.length', this.allSite.deals_list.length);
    for (let i = 0; i < this.allSite.deals_list.length; i++) {
      if (this.allSite.deals_list[i].on_top === true) {
        this.mainpage.push(this.allSite.deals_list[i]);
      }
    }
    */
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
