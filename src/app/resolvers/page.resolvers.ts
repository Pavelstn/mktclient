import {Injectable} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
// import {Observable} from 'rxjs';
import {LoadDataService} from '../services/load-data.service';

@Injectable()
export class MainPageResolver implements Resolve<any> {
  constructor(private ls: LoadDataService) {
  }

  resolve(page: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ls.getMainPge().then(data => data);
  }
}
