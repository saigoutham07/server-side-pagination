import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TreeModule } from 'angular-tree-component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { MINMAX_DIRECTIVES } from './min-max-validation';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { CheckboxListModule } from './checkbox-list/checkbox-list.module';
import { SimpleDfmModule } from './simple-dfm/simple-dfm.module';

library.add(fas, far);

@NgModule({
  declarations: [
    TimeAgoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularMultiSelectModule,
    AngularDateTimePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FilterPipeModule,
    FontAwesomeModule,
    TreeModule.forRoot(),
    NgbModule,
    ScrollingModule,
    OwlMomentDateTimeModule,
    CheckboxListModule,
    SimpleDfmModule,
    MultiselectComponent
  ],
  exports: [
    MINMAX_DIRECTIVES,
    CheckboxListModule,
    SimpleDfmModule,
  ],
  providers: []
})
export class SharedModule { }
