import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
// import {ComponentModule} from '../../components/component.module';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  RouterModule } from '@angular/router';
import { SmallCardComponent } from './small-card/small-card.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home.component';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeRoutingModule,
    NgxGalleryModule,
  ],
  declarations: [IndexComponent, SmallCardComponent, TopNavComponent, PageComponent, HomeComponent]
})
export class HomeModule { }
