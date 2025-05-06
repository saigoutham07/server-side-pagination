import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';

import { TableServerSideComponent } from './table-server-side.component';
import { TableServerSide } from './service/table-server-side';
import { NgSelectModule } from '@ng-select/ng-select';
import { SimpleDfmModule } from '../simple-dfm/simple-dfm.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'DD-MM-YYYY',
  parseInput: 'DD-MM-YYYY',
  datePickerInput: 'DD-MM-YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};

@NgModule({
  declarations: [
    TableServerSideComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SimpleDfmModule,
    NgbModule
  ],
  exports: [
    TableServerSideComponent
  ],
  providers: [
    TableServerSide,
    {
      provide: OWL_DATE_TIME_FORMATS,
      useValue: MY_CUSTOM_FORMATS
    }
  ]
})
export class TableServerSideModule { }
