import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
// import {ComponentModule} from '../../components/component.module';



import {PageComponent} from './page/page.component';
import {HomeComponent} from './home.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrderComponent} from './order/order.component';
import {ComponentsModule} from '../../components/components.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeRoutingModule,
    NgxGalleryModule,
    ComponentsModule,
  ],
  declarations: [
    IndexComponent,
    PageComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    CategoryComponent
  ]
})
export class HomeModule {
}
