import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  user_id = 1;
  shop_id = 3;
  dataServer = 'http://mkt4u.ru';
  projetctName = 'SmartWatch';

  constructor() { }

}
