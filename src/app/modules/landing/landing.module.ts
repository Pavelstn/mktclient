import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../../components/components.module';
import {LandingRoutingModule} from './landing-routing.module';
import { LandingComponent } from './landing.component';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    LandingRoutingModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
