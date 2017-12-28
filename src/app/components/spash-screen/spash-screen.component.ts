import {Component, OnInit, TemplateRef} from '@angular/core';
import {SplashScreenService} from '../../services/splash-screen.service';

@Component({
  selector: 'app-spash-screen',
  templateUrl: './spash-screen.component.html',
  styleUrls: ['./spash-screen.component.sass']
})
export class SpashScreenComponent implements OnInit {
  public showSplash = false;
  public showAnimate = false;
  public hideAnimate = false;

  constructor(private ss: SplashScreenService) {
  }

  ngOnInit() {
    this.ss.change.subscribe((data) => {
      // this.showSplash = data;
      // план таков: как появляется сигнал показать сплэш- сразу показываем его и запускаем анимацию показа
      // как появился сигнал скрыть- запускаем анимацию скрытия, а по таймеру через x секунд закрываем сплэш
      if (data) {
        this.showSplash = true;
        this.showAnimate = true;
        this.hideAnimate = false;
      } else {
        setTimeout(() => {
          this.showSplash = false;
        }, 600);
        this.hideAnimate = true;
        this.showAnimate = false;
      }

    });

  }

}
