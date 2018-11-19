import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RmPortalComponent } from './rm-portal/rm-portal.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
import { AppRoutingModule } from './/app-routing.module';

import { RMPortalService } from './rm-portal/rm-portal.service';
import { ClientPortalPreviewComponent } from './client-portal-preview/client-portal-preview.component';
import { ClientPortalSignComponent } from './client-portal-sign/client-portal-sign.component';
import { RmPortalPreviewComponent } from './rm-portal-preview/rm-portal-preview.component';
import { ClientPortalDataService } from './client-portal/client-portal-data.service';
import { RMPortalDataService } from './rm-portal/rm-portal-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RmPortalComponent,
    ClientPortalComponent,
    ClientPortalPreviewComponent,
    ClientPortalSignComponent,
    RmPortalPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    RMPortalService,
    ClientPortalDataService,
    RMPortalDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
