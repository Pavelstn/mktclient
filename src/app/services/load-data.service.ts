import {Injectable, EventEmitter} from '@angular/core';
import {Jsonp, Response} from '@angular/http';
import {ConfigService} from '../services/config.service';
import {SplashScreenService} from '../services/splash-screen.service';
import {Headers, Http} from '@angular/http';
// import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Rx';


@Injectable()
export class LoadDataService {
  data;
  url;

  categories = [];
  categoriesChange;
  deals_list = [];
  deals_listChange;
  pages = [];
  pagesChange;


  constructor(private jsonp: Jsonp, private config: ConfigService, private http: Http, private ss: SplashScreenService) {

    this.categoriesChange = new EventEmitter();
    this.deals_listChange = new EventEmitter();
    this.pagesChange = new EventEmitter();

    this.url = `${this.config.dataServer}/api/index/${this.config.shop_id.toString()}?callback=JSONP_CALLBACK`;
  }

  getMainPage() {
    this.ss.show();
    this.jsonp.get(this.url).subscribe((data) => {
      this.emitUpdateData(data.json());
    });
  }

  getPage(deal_id) {
    this.ss.show();
    this.jsonp.get(`${this.config.dataServer}/api/page/${this.config.shop_id.toString()}/${deal_id}?callback=JSONP_CALLBACK`)
      .subscribe((data) => {
      this.emitUpdateData(data.json());
    });
  }


  private emitUpdateData(data) {
   // console.log('data', data);

    this.categories = data.categories;
    this.deals_list = data.deals_list;
    this.pages = data.pages;

    this.categoriesChange.emit(this.categories);
    this.deals_listChange.emit(this.deals_list);
    this.pagesChange.emit(this.pages);
    this.ss.hide();
  }


  private errHandler(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error);
  }

}
