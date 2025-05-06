import { Component, OnInit, Input, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { EventEmitter } from '@angular/core';
import { AlertService } from '../alert.service';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'DD-MM-YYYY',
  parseInput: 'DD-MM-YYYY',
  datePickerInput: 'DD-MM-YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};
@Component({
  selector: 'app-simple-dfm',
  templateUrl: './simple-dfm.component.html',
  styleUrls: ['./simple-dfm.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS },
  ]
})
export class SimpleDfmComponent implements OnInit {
  objectKeys = Object.keys;
  @Input() metaData;
  @Input() parentData;
  @Input() savedData;
  @Output() selectFieldChange: EventEmitter<any>;
  constructor(private sharedService: SharedService, public alert: AlertService) {
    this.selectFieldChange = new EventEmitter<any>();
  }
  ngOnInit() {
  }
  validateField(data, type?) {
    return this.sharedService.validateField(data, type);
  }
  triggerSavedSelectChange() {
    try {
      const index = this.metaData.findIndex(ele => ele.dependency === true);
      if (index > -1 && this.savedData[this.metaData[index].key]) {
        this.selectChange(this.savedData[this.metaData[index].key], this.metaData[index]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  dateValidation(event, field) {
    try {
      if (event === undefined || event === null || event.toString().trim().length === 0) {
        return true;
      }
      if (field.validations && field.validations.length > 0) {
        if (field.validations.includes('todayValid')) {
          if (Date.parse(event) > +new Date()) {
            const index = this.metaData.findIndex(ele => ele.key === field.key);
            this.metaData[index].validateMsg = 'Date should be Today or less than Today';
            return true;
          }
        }
        if (field.validations.includes('greaterValid') && field.fromKey) {
          const startDate = this.savedData[field.fromKey];
          if (Date.parse(event) < Date.parse(startDate)) {
            const index = this.metaData.findIndex(ele => ele.key === field.key);
            this.metaData[index].validateMsg = 'To Date should be greater than From Date';
            return true;
          }
        }
        if (field.validations.includes('greaterEqualValid') && field.fromKey) {
          const startDate = new Date(this.savedData[field.fromKey]);
          startDate.setHours(0, 0, 0, 0);
          if (Date.parse(startDate.toString()) > Date.parse(event)) {
            const index = this.metaData.findIndex(ele => ele.key === field.key);
            this.metaData[index].validateMsg = 'To Date should be greater than From Date';
            return true;
          }
        }
        if (field.validations.includes('diffValid') && field.fromKey) {
          const startDate = this.savedData[field.fromKey];
          const diffTime = Math.abs(+new Date(event) - (+new Date(startDate)));
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays > 90) {
            const index = this.metaData.findIndex(ele => ele.key === field.key);
            this.metaData[index].validateMsg = 'Date Range between from Date and To date should not be greater than 90 days';
            return true;
          }
        }
        if (field.validations.includes('diffValidfortyDays') && field.fromKey) {
          const startDate = this.savedData[field.fromKey];
          const diffTime = Math.abs(+new Date(event) - (+new Date(startDate)));
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays > 40) {
            const index = this.metaData.findIndex(ele => ele.key === field.key);
            this.metaData[index].validateMsg = 'Date Range between from Date and To date should not be greater than 40 days';
            return true;
          }
        }
        if (field.validations.includes('diffValidoneYear') && field.fromKey) {
          const startDate = this.savedData[field.fromKey];
          const diffTime = Math.abs(+new Date(event) - (+new Date(startDate)));
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays > 365) {
            const index = this.metaData.findIndex(ele => ele.key === field.key);
            this.metaData[index].validateMsg = 'Date Range between from Date and To date should not be greater than 1 year';
            return true;
          }
        }
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  selectChange(event, field) {
    try {
      if (field.dependency && this.parentData.serviceDependency) {
        const index = this.metaData.findIndex(ele => ele.key === field.dependencyKey);
        this.metaData[index].options = field.dependentOptions[event];
        if (this.metaData[index].options && this.metaData[index].options[0]) {
          this.savedData[field.dependencyKey] = this.savedData[field.dependencyKey] || this.metaData[index].options[0].key;
          this.selectChange(this.savedData[field.dependencyKey], this.metaData[index]);
        }
      } else if (field.multipleDependency) {
        const indexes = [];
        field.dependencyKeys.forEach(element => {
          indexes.push(this.metaData.findIndex(ele => ele.key === element));
        });
        indexes.forEach(index => {
          this.metaData[index].options = field.dependentOptions[event];
          if (this.metaData[index].options && this.metaData[index].options[0]) {
            this.savedData[this.metaData[index].key] = this.savedData[this.metaData[index].key] || this.metaData[index].options[0].key;
            this.selectChange(this.savedData[this.metaData[index].key], this.metaData[index]);
          }
        });
      }
      if (field.hiddenDependency) {
        const flag = field.displayOn === event;
        const indexes = [];
        field.listOfhiddenDependencyFields.forEach(element => {
          indexes.push(this.metaData.findIndex(ele => ele.key === element));
        });
        indexes.forEach(index => {
          if (this.metaData[index]) {
            this.metaData[index].hidden = !flag;
            if (!flag) {
              delete this.savedData[this.metaData[index].key];
            }
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
    const obj = { value: event, field };
    this.selectFieldChange.emit(obj);
  }
  // Function for multiple select - on all option selection Disabling other options.
  selectChangeMultiple(event, field, eventEmittedType) {
    try {
      event = event.value;
      const obj = { value: event, field };
      if (field.type === 'multiselectwithall' && field.addAll === true) {
        if (eventEmittedType === 'add' && (event === 'all' || event === '0')) {
          const index = this.metaData.findIndex(ele => ele.key === field.key);
          const disabledOptions = field.options
            .map(u => {
              if (u.value === 'all' || u.value === '0') {
                return u;
              } else {
                u.disabled = true;
                return u;
              }
            });
          this.metaData[index].options = disabledOptions;
          this.selectFieldChange.emit({ value: [event], field });
        } else {
          const index = this.metaData.findIndex(ele => ele.key === field.key);
          const disabledOptions = field.options
            .map(u => {
              u.disabled = false;
              return u;
            });
          this.metaData[index].options = disabledOptions;
          setTimeout(() => {
            this.selectFieldChange.emit({ value: this.savedData[field.key], field });
          }, 300);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  bs64Emitter(event, field) {
    if (event === 'invalidFormat') {
      // this.alert.open('info', `Only ${field.accept} files are allowed`, 'Invalid File');
    }
  }
  onChangCheckBoxList(event, key) {
    this.savedData[key] = event.data;
  }
  textNumberOnly(event): boolean {
    try {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  pasteEventtextNumber(event) {
    try {
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  }
}
