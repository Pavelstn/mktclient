import {Component, OnInit, TemplateRef} from '@angular/core';
import {SplashScreenService} from '../../services/splash-screen.service';

@Component({
  selector: 'app-spash-screen',
  templateUrl: './spash-screen.component.html',
  styleUrls: ['./spash-screen.component.sass']
})
export class SpashScreenComponent implements OnInit {
  public showSplash= true;
  constructor(private ss: SplashScreenService) {
  }

  ngOnInit() {
    this.ss.change.subscribe((data) => {
      this.showSplash = data;
    });

  }

}
