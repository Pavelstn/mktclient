import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import {ConfigService} from '../services/config.service';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoadDataService {
  data;

  constructor(private config: ConfigService, private http: Http) {
  }

  public getMainPge() {
    return this.http.get(this.config.dataServer + '/api/index/' + this.config.shop_id.toString() + '?callback=JSONP_CALLBACK').toPromise()
      .then(res => res.json())
      .catch(err => {
      });
  }

}
