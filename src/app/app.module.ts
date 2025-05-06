import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedService } from './shared/shared.service';
import { AlertService } from './shared/alert.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';

import { LoaderCommonComponent } from './shared/loader/loader-common.component';
import { LoaderService } from './shared/loader/loader-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoaderCommonComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    AlertModalComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    LoaderService,
    SharedService,
    AlertService,
  ],
  bootstrap: [AppComponent],
  exports: [
    LoaderCommonComponent,
    AlertModalComponent
  ]
})
export class AppModule { }
