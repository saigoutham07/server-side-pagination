import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from './loader-service.service';
import { LoaderState } from './loader-state';

@Component({
  selector: 'app-loader-common',
  templateUrl: './loader-common.component.html',
  styleUrls: ['./loader-common.component.scss']
})
export class LoaderCommonComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;
  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
