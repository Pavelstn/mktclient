import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealTableComponent } from './deal-table/deal-table.component';
import { SpashScreenComponent } from './spash-screen/spash-screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DealTableComponent,
    SpashScreenComponent,
  ],
  declarations: [DealTableComponent, SpashScreenComponent, SpashScreenComponent]
})
export class ComponentsModule { }
