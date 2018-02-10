import {Component, OnInit, OnDestroy} from '@angular/core';
// import {ActivatedRoute, Route} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';
// import {Title} from '@angular/platform-browser';
import {TitleService} from '../../../services/title.service';
import {Subscription} from 'rxjs/Subscription';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {
  dealList = [];
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private ls: LoadDataService, private titleService: TitleService) {
  }

  /*  ngOnInit___() {

      this.route.params.subscribe(params => {
        console.log('params', params);
        this.ls.getMainPage();
        this.preparePage(parseInt(params['id'], 10));
        this.ls.deals_listChange.subscribe((deals_list) => {
          this.preparePage(parseInt(params['id'], 10));
        });
      });
    }*/

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.ls.getMainPage();
      this.preparePage(parseInt(params['id'], 10));
      /* this.ls.deals_listChange.subscribe((deals_list) => {
         this.preparePage(parseInt(params['id'], 10));
       });*/
    });
  }

  private preparePage(id) {
    this.dealList = [];
    for (let item of this.ls.deals_list) {
      for (let cat_id of item.categories) {
        if (cat_id === id) {
          this.dealList.push(item);
        }
      }
    }
    this.setTitle(id);
  }

  private setTitle(id) {
    for (let item of this.ls.categories) {
      if (item.id === id) {
        // console.log('item', item);
        this.titleService.setTitle(item.name);
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
