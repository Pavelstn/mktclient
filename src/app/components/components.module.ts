import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxGalleryModule} from 'ngx-gallery';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import {DealTableComponent} from './deal-table/deal-table.component';
import {SpashScreenComponent} from './spash-screen/spash-screen.component';
import {BigGalleryComponent} from './big-gallery/big-gallery.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {SmallCardComponent} from './small-card/small-card.component';
import {CartWidgetComponent} from './cart-widget/cart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxGalleryModule,

    FlexLayoutModule,
  ],
  exports: [
    DealTableComponent,
    SpashScreenComponent,
    BigGalleryComponent,
    CartWidgetComponent,
    TopNavComponent,
    SmallCardComponent,
  ],
  declarations: [
    DealTableComponent,
    SpashScreenComponent,
    SpashScreenComponent,
    BigGalleryComponent,
    CartWidgetComponent,
    TopNavComponent,
    SmallCardComponent,
  ]
})
export class ComponentsModule {
}
