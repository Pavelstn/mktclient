import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  mainpage;

  constructor(private route: ActivatedRoute, private ls: LoadDataService) {
  }

  ngOnInit() {

/*    this.ls.getMainPge().subscribe((data) => {
      console.log('data', data);
    });
    console.log('this.mainpage', this.mainpage);*/
    this.mainpage = this.route.snapshot.data['mainPage'];
    console.log('this.mainpage', this.mainpage);

  }

}
