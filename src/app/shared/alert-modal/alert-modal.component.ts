import { Component, OnInit, Input } from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {
  @Input() inputInfo: any;
  public iconType = 'fa fa-check-circle';
  constructor(
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    try {
      if (this.inputInfo && this.inputInfo.icon === true && this.inputInfo.status === 'success') {
        this.iconType = 'fa fa-check-circle icon-success align-inline';
      } else if (this.inputInfo && this.inputInfo.icon === true && this.inputInfo.status === 'error') {
        this.iconType = 'fa fa-times-circle-o icon-error align-inline';
      } else if (this.inputInfo && this.inputInfo.icon === true && this.inputInfo.status === 'warning') {
        this.iconType = 'fa fa-exclamation-triangle icon-warning align-inline';
      } else if (this.inputInfo && this.inputInfo.icon === true && this.inputInfo.type === 'confirm') {
        this.iconType = 'fa fa-question-circle icon-warning';
      }
    } catch (error) {
      console.log(error);
    }


  }

}
