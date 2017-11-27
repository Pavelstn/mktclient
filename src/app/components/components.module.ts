import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealTableComponent } from './deal-table/deal-table.component';
import { SpashScreenComponent } from './spash-screen/spash-screen.component';
import { BigGalleryComponent } from './big-gallery/big-gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule,
  ],
  exports: [
    DealTableComponent,
    SpashScreenComponent,
    BigGalleryComponent,
  ],
  declarations: [DealTableComponent, SpashScreenComponent, SpashScreenComponent, BigGalleryComponent]
})
export class ComponentsModule { }
