import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrderComponent} from './order/order.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    ComponentsModule,

    CartRoutingModule,
  ],
  declarations: [
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    CartListComponent,
  ]
})
export class CartModule { }
