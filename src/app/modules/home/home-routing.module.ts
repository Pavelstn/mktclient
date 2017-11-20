import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageResolver, PageResolver} from '../../resolvers/page.resolvers';
import {IndexComponent} from './index/index.component';
import {PageComponent} from './page/page.component';
import {HomeComponent} from './home.component';
import {CartComponent} from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: IndexComponent,
      resolve: {
        mainPage: MainPageResolver
      }
    }, {
      path: 'page/:id',
      component: PageComponent,
      resolve: {
        page: PageResolver
      }
    }, {
      path: 'cart',
      component: CartComponent,
    }, {
      path: 'checkout',
      component: CheckoutComponent,
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
  providers: [MainPageResolver, PageResolver]
})
export class HomeRoutingModule {
}
