import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  public modalInfo = {
    type: 'error',
    data: {
      title: 'Unknown Error',

    }
  };
  constructor(public modalService: NgbModal) { }
  open(inputModalInfo) {
    const defaultOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      centered: true
    };
    if (inputModalInfo && inputModalInfo.type && inputModalInfo.data && inputModalInfo.buttons) {
      this.modalInfo = inputModalInfo;
    }
    const modalRef = this.modalService.open(AlertModalComponent, defaultOptions);
    // modalRef.result.then(
    //   (result) => { console.log(result); }, // on triggering of close method of modal
    //   (reason) => { console.log(reason); }); // on triggering of dissmiss method of modal

    modalRef.componentInstance.inputInfo = this.modalInfo;
    return modalRef;
  }
}
