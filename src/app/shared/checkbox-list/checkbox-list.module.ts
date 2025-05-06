import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxListComponent } from './checkbox-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [CheckboxListComponent],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule
  ],
  exports: [
    CheckboxListComponent
  ]
})
export class CheckboxListModule { }
