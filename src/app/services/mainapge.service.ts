import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Response} from '@angular/http';
import {ConfigService} from '../services/config.service';

@Injectable()
export class MainPageService {
    data: Observable<any>;

    constructor(private jsonp: Jsonp, private config: ConfigService) {
    }

    loadData() {
        this.data = this.jsonp
            .get(this.config.dataServer + '/userapi/shop/' + this.config.shop_id.toString() + '?callback=JSONP_CALLBACK')
            .map((resp: Response) => {
                let data = resp.json();
                return data;
            }).share();
    }

    getData() {
        return this.data;
    }
}
