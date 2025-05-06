import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilitiesService {

  constructor() { }
  addOptionAll(arr, type?) {
    try {
      if (Array.isArray(arr)) {
        if (type === 'number') {
          arr.splice(0, 0, { label: 'All', value: 0 });
        } else if (type === 'zeroString') {
          arr.splice(0, 0, { label: 'All', value: '0' });
        } else {
          arr.splice(0, 0, { label: 'All', value: 'all' });
        }

      }
      return arr;
    } catch (error) {
      console.log(error);
    }
  }
  validateDate(event, field) {
    const validateMsg = { valid: true, message: 'Date is Valid' };
    try {
      if (event === undefined || event === null || event.toString().trim().length === 0) {
        validateMsg.valid = false;
        validateMsg.message = 'Enter the date';
        return validateMsg;
      }
      if (field.validations && field.validations.length > 0) {
        if (field.validations.includes('gtToday')) {
          if (Date.parse(event) <= +new Date()) {
            validateMsg.valid = false;
            validateMsg.message = 'Date should be greater than Today';
            return validateMsg;
          }
        }
        if (field.validations.includes('gteToday')) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (Date.parse(event) < +today) {
            validateMsg.valid = false;
            validateMsg.message = 'Date should be Today or greater than Today';
            return validateMsg;
          }
        }
        if (field.validations.includes('ltToday')) {
          if (Date.parse(event) >= +new Date()) {
            validateMsg.valid = false;
            validateMsg.message = 'Date should be less than Today';
            return validateMsg;
          }
        }
        if (field.validations.includes('lteToday')) {
          if (Date.parse(event) > +new Date()) {
            validateMsg.valid = false;
            validateMsg.message = 'Date should be Today or less than Today';
            return validateMsg;
          }
        }
        if (field.validations.includes('greaterValid') && field.fromDate) {
          const startDate = field.fromDate;
          if (Date.parse(event) < Date.parse(startDate)) {
            validateMsg.valid = false;
            validateMsg.message = 'To Date should be greater than From Date';
            return validateMsg;
          }
        }
        if (field.validations.includes('lesserValid') && field.fromDate) {
          const startDate = field.fromDate;
          if (Date.parse(event) > Date.parse(startDate)) {
            validateMsg.valid = false;
            validateMsg.message = 'From Date should be less than To Date';
            return validateMsg;
          }
        }
        if (field.validations.includes('greaterOrEqualValid') && field.fromDate) {
          const startDate = field.fromDate;
          startDate.setHours(0, 0, 0, 0);
          if (Date.parse(startDate) > Date.parse(event)) {
            validateMsg.valid = false;
            validateMsg.message = 'To Date should be greater than or equal to From Date';
            return validateMsg;
          }
        }
        if (field.validations.includes('diffValid') && field.fromDate) {
          const startDate = field.fromDate;
          const diffTime = Math.abs(+new Date(event) - (+new Date(startDate)));
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (field.condition && field.noOfDays) {
            field.noOfDays = Number(field.noOfDays);
            switch (field.condition) {
              case 'gt':
                if (diffDays > field.noOfDays) {
                  validateMsg.valid = false;
                  validateMsg.message = 'Date Range between from Date and To date should not be greater than ' + field.noOfDays + ' days';
                  return validateMsg;
                }
                break;
              case 'lt':
                if (diffDays < field.noOfDays) {
                  validateMsg.valid = false;
                  validateMsg.message = 'Date Range between from Date and To date should not be less than ' + field.noOfDays + ' days';
                  return validateMsg;
                }
                break;
              case 'gte':
                if (diffDays >= field.noOfDays) {
                  validateMsg.valid = false;
                  // tslint:disable-next-line: max-line-length
                  validateMsg.message = 'Date Range between from Date and To date should not be greater than or equal to ' + field.noOfDays + ' days';
                  return validateMsg;
                }
                break;
              case 'lte':
                if (diffDays <= field.noOfDays) {
                  validateMsg.valid = false;
                  // tslint:disable-next-line: max-line-length
                  validateMsg.message = 'Date Range between from Date and To date should not be less than or equal to ' + field.noOfDays + ' days';
                  return validateMsg;
                }
                break;
              case 'equal':
                if (diffDays === field.noOfDays) {
                  validateMsg.valid = false;
                  validateMsg.message = 'Date Range between from Date and To date should not be equal to ' + field.noOfDays + ' days';
                  return validateMsg;
                }
                break;
              default:
                break;
            }
          }
        }
        return validateMsg;
      }
    } catch (error) {
      console.log(error);
    }
  }
  closeFilter() {
    try {
      const buttons: any = document.getElementsByClassName('filterCloseBtn');
      if (buttons && buttons.length > 0) {
        for (const ele of buttons) {
          ele.click();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
