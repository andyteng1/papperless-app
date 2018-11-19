import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RmPortalComponent } from './rm-portal/rm-portal.component';
import { RmPortalPreviewComponent } from './rm-portal-preview/rm-portal-preview.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
import { ClientPortalPreviewComponent } from './client-portal-preview/client-portal-preview.component';
import { ClientPortalSignComponent } from './client-portal-sign/client-portal-sign.component';

const routes: Routes = [
  { path: '', redirectTo: 'rm-portal', pathMatch: 'full'},
  { path: 'rm-portal', component: RmPortalComponent},
  { path: 'rm-portal/doc/preview', component: RmPortalPreviewComponent},
  { path: 'client-portal', component: ClientPortalComponent},
  { path: 'client-portal/doc/preview', component: ClientPortalPreviewComponent},
  { path: 'client-portal/doc/sign', component: ClientPortalSignComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
