import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrderComponent} from './order/order.component';

import {CartListComponent} from './cart-list/cart-list.component';

const routes: Routes = [{
  path: 'cart',
  component: CartComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: CartListComponent,
    }, {
      path: 'checkout',
      component: CheckoutComponent,
    }, {
      path: 'order',
      component: OrderComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CartRoutingModule {
}
