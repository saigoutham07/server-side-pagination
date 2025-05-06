import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { LayoutComponent } from './layout.component';
import { TableServerSideModule } from '../shared/table-server-side/table-server-side.module';

@NgModule({
  declarations: [DataTableComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TableServerSideModule
  ]
})
export class LayoutModule { }
