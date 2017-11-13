import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// import { TransportResolver } from "../../resolvers/dictionary.resolvers";
// import { FailedRoutesSearchResolver } from "../../resolvers/statistics.resolvers";
// import {StatisticsService} from "../../services/statistics.service";

 import {MainPageResolver} from '../../resolvers/page.resolvers';


import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent,
    resolve: {
      mainpage: MainPageResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MainPageResolver]
})
export class HomeRoutingModule { }
