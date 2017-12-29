import {Component, OnInit} from '@angular/core';
import {LoadDataService} from '../../services/load-data.service';
import {Router, NavigationEnd} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {
  categories = [];
  public mobileModeMenuShow = false;
  public showAnimate = false;
  public hideAnimate = false;

  constructor(public ls: LoadDataService, public router: Router) {
  }

  ngOnInit() {
    this.categories = this.ls.categories;
    this.ls.categoriesChange.subscribe((categories) => {
      this.categories = this.ls.categories;
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
    console.log('url', url);
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
