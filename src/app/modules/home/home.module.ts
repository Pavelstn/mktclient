import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
// import {ComponentModule} from '../../components/component.module';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeRoutingModule,
  ],
  declarations: [IndexComponent]
})
export class HomeModule { }
