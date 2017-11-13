import {Injectable} from '@angular/core';
import {Jsonp, Response} from '@angular/http';
import {ConfigService} from '../services/config.service';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class LoadDataService {
  data;
  url;

  constructor(private jsonp: Jsonp, private config: ConfigService, private http: Http) {
    this.url = `${this.config.dataServer}/api/index/${this.config.shop_id.toString()}?callback=JSONP_CALLBACK`;
  }

  getMainPge(): Observable<any[]> {
    return this.jsonp.get(this.url)
      .map(function (res: Response) {
        return res.json() || {};
      }).catch(function (error: any) {
        return Observable.throw(error);
      });
  }

}
