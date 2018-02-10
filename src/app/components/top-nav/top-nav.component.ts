import {Component, OnInit} from '@angular/core';
import {LoadDataService} from '../../services/load-data.service';
import {Router, NavigationEnd} from '@angular/router';
import * as $ from 'jquery';
// import {Title} from '@angular/platform-browser';
import {TitleService} from '../../services/title.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {
  public categories = [];
  public mobileModeMenuShow = false;
  public showAnimate = false;
  public hideAnimate = false;
  public title = '';

  constructor(public ls: LoadDataService, public router: Router, private ttls: TitleService) {
  }

  ngOnInit() {
    this.categories = this.ls.categories;
    this.ls.categoriesChange.subscribe((categories) => {
      this.categories = this.ls.categories;
    });
    // this.title = this.titleService.getTitle();
    this.title = this.ttls.title;
    this.ttls.getTitle.subscribe((title) => {
      this.title = title;
    });
  }

  public clickButton() {
    if (!this.mobileModeMenuShow) {
      this.mobileModeMenuShow = true;
      this.hideAnimate = false;
      this.showAnimate = true;
      $('html,body').css('overflow', 'hidden');

    } else {
      this.hideMenu();
    }
  }

  public clickLink(url) {
    // console.log('url', url);
    this.router.navigateByUrl(url);
    this.hideMenu();
  }

  private hideMenu() {
    this.hideAnimate = true;
    this.showAnimate = false;
    setTimeout(() => {
      this.mobileModeMenuShow = false;
      $('html,body').css('overflow', 'auto');
    }, 600);
  }

}
