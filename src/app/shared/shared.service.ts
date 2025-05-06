import { Injectable } from '@angular/core';
import { AlertService, AlertConfig } from '../shared/alert.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public alert: AlertService) { }

  private showHeader = new Subject<any>();

  public months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' }
  ];
  public weekDays = [
    { label: 'Sunday', value: 'sunday' },
    { label: 'Monday', value: 'monday' },
    { label: 'Tuesday', value: 'tuesday' },
    { label: 'Wednesday', value: 'wednesday' },
    { label: 'Thursday', value: 'thursday' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' }
  ];
  public durationTypes = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' }
  ];
  setShowHeader(message: boolean) {
    this.showHeader.next(message);
  }
  getShowHeader(): Observable<any> {
    return this.showHeader.asObservable();
  }
  public getYears(from, to, numeric?) {
    const months = [];
    for (let index = from; index < to; index++) {
      months.push({ value: numeric ? index : index.toString(), label: index.toString() });
    }
    return months;
  }
  validateField(data, type?) {
    if (data === undefined || data === null || data.toString().trim().length === 0) {
      return true;
    } else {
      if (type === 'email') {
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return !data.match(emailPattern);
      } else if (type === 'cus-date') {
        const cusDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
        return !data.match(cusDate);
      } else if (type === 'ipAddress') {
        // tslint:disable-next-line:max-line-length
        const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return !data.match(ipPattern);
      } else if (type === 'multiselect') {
        return !(data.length > 0);
      }
      return false;
    }
  }
  getDisabledStatus(cls) {
    if ($('.' + cls).length > 0) {
      $('.' + cls)[0].focus();
      return true;
    } else {
      return false;
    }
  }
  /**
   * @param date valid date ||
   * @param dateFirst boolean value, to get month first, default year first ||
   * returns date in specified format
   */
  formatDate(date, dateFirst?) {
    const temp = new Date(date);
    let month = '' + (temp.getMonth() + 1);
    let day = '' + temp.getDate();
    const year = temp.getFullYear();
    month = month.length < 2 ? '0' + month : month;
    day = day.length < 2 ? '0' + day : day;
    return [dateFirst ? day : year, month, dateFirst ? year : day].join('-');
  }
  formatTime(time) {
    const temp = new Date(time);
    let hours = '' + temp.getHours();
    let minutes = '' + temp.getMinutes();
    let seconds = '' + temp.getSeconds();
    hours = hours.length < 2 ? '0' + hours : hours;
    minutes = minutes.length < 2 ? '0' + minutes : minutes;
    seconds = seconds.length < 2 ? '0' + seconds : seconds;
    return [hours, minutes, seconds].join(':');
  }
  formatFromAndToDates(date) {
    try {
      return {
        fromDate: `${this.formatDate(date[0])} ${this.formatTime(date[0])}`,
        toDate: `${this.formatDate(date[1])} ${this.formatTime(date[1])}`
      };
    } catch (error) {
      return {};
    }
  }
  dateCriteria() {
    return [
      { value: '1sec', label: '1 Sec' },
      { value: '1min', label: '1 Min' },
      { value: '15min', label: '15 Min' },
      { value: 'Hourly', label: '1 Hour' },
      { value: '8hours', label: '8 Hours' },
      { value: 'DAILY', label: 'Daily' },
      { value: 'Monthly', label: 'Monthly' },
      { value: 'yearly', label: 'Yearly' }
    ];
  }
  // common alerts
  public internalCodeError(message?) {
    const alertConf: AlertConfig = {
      type: 'error', title: 'Failed', body: message.error || 'Internal code error'
    };
    this.alert.open(alertConf);
  }
  public serviceErrorMessage(message?) {
    const alertConf: AlertConfig = { type: 'error', title: 'Failed', body: message };
    this.alert.open(alertConf);
  }
  public serviceSuccessMessage(message?) {
    const alertConf: AlertConfig = { type: 'success', title: 'Success', body: message };
    this.alert.open(alertConf);
  }
  public serviceWarningMessage(message?) {
    const alertConf: AlertConfig = { type: 'warning', title: 'Info', body: message };
    this.alert.open(alertConf);
  }
  public removeNav() {
    setTimeout(() => {
      $('#web-nav-bar').remove();
    }, 1000);
  }
}

