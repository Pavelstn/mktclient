import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class SplashScreenService {
  public showSplash = true;
  public change;

  constructor() {
    this.change = new EventEmitter();
  }

  public show() {
    this.showSplash = true;
    this.change.emit(this.showSplash);
  }

  public hide() {
    this.showSplash = false;
    this.change.emit(this.showSplash);
  }

}
