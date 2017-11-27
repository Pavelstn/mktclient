import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {MainPageResolver, PageResolver} from '../../resolvers/page.resolvers';

import {IndexComponent} from './index/index.component';
import {PageComponent} from './page/page.component';
import {HomeComponent} from './home.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: IndexComponent,
    }, {
      path: 'page/:id',
      component: PageComponent,
    },   {
      path: 'category/:id',
      component: CategoryComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
