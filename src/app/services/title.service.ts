import {Injectable, EventEmitter} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Injectable()
export class TitleService {
  public getTitle;
  public title: any;

  constructor(private systemTitleService: Title) {
    this.getTitle = new EventEmitter();
    this.title = '';
  }

  public setTitle(title: any) {
    this.systemTitleService.setTitle(title);
    this.title = title;
    this.getTitle.emit(this.title);
    console.log('this.title', this.title);
  }

/*  public getTitle() {
    return this.change.emit(this.title);
  }*/

}
