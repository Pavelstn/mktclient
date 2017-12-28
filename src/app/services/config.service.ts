import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  user_id = 1;
  shop_id = 2;
   dataServer = 'http://51rose.ru';
  // dataServer = 'http://localhost:8080';
  projetctName = 'SmartWatch';

  constructor() { }

}
