import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageResolver} from '../../resolvers/page.resolvers';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent,
    resolve: {
      mainPage: MainPageResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MainPageResolver]
})
export class HomeRoutingModule {
}
