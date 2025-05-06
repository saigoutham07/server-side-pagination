import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDfmComponent } from './simple-dfm.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { NgSelectModule } from '@ng-select/ng-select';
import { CheckboxListModule } from '../checkbox-list/checkbox-list.module';
@NgModule({
  declarations: [SimpleDfmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule,
    NgSelectModule,
    CheckboxListModule,
  ],
  exports: [SimpleDfmComponent]
})
export class SimpleDfmModule { }
