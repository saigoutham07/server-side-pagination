import { Injectable } from '@angular/core';
import * as toastr from 'toastr';


@Injectable({
  providedIn: 'root'
})

export class AlertConfig {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  body: string;
}
export class AlertService {

  constructor() {
    toastr.options.closeButton = true;
    toastr.options.progressBar = false;
    toastr.options.timeOut = 10000;

    // toastr.options.closeHtml = '<button><i aria-hidden="true" class="fa fa-times-circle"></i></button>';
  }
  /**
   *
   * @param type success||error||info||warning
   * @param title title - any string
   * @param body body - any string
   *
   */
  public open(alert: AlertConfig) {
    let customClass = '';
    if (alert.type === 'success') {
      customClass = 'toast-success custom-icon';
    } else if (alert.type === 'error') {
      customClass = 'toast-error custom-icon';
    } else if (alert.type === 'warning') {
      customClass = 'toast-warning custom-icon';
    } else {
      customClass = 'toast-info';
    }
    toastr[alert.type](alert.body, alert.title, { iconClass: customClass });
  }
}
