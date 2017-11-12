import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
// import { TransportResolver } from "../../resolvers/dictionary.resolvers";
// import { FailedRoutesSearchResolver } from "../../resolvers/statistics.resolvers";
// import {StatisticsService} from "../../services/statistics.service";

const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent,
    resolve: {}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
