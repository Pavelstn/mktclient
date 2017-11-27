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
      component: IndexComponent,
    }, {
      path: 'page/:id',
      component: PageComponent,
    },   {
      path: 'category/:id',
      component: CategoryComponent,
    }
  ]

  /*  {
      path: 'home',
      component: IndexComponent,
      resolve: {
        mainPage: MainPageResolver
      }
    },*/
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
