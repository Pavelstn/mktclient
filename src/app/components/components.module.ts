import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealTableComponent } from './deal-table/deal-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DealTableComponent,
  ],
  declarations: [DealTableComponent]
})
export class ComponentsModule { }
