import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ClientPortalDataService } from './../client-portal/client-portal-data.service';
import { ClientPortalPreviewService } from './client-portal-preview.service';

@Component({
  selector: 'app-client-portal-preview',
  templateUrl: './client-portal-preview.component.html',
  styleUrls: ['./client-portal-preview.component.css']
})
export class ClientPortalPreviewComponent implements OnInit {
  private clientId;
  private documentId;
  private documentUrl: SafeResourceUrl;

  constructor(
    private router: Router,
    private clientPortalDataService: ClientPortalDataService,
    private clientPortalPreviewService: ClientPortalPreviewService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.clientId = this.clientPortalDataService.getDocumentData().clientId;
    this.documentId = this.clientPortalDataService.getDocumentData().document;
    this.clientPortalPreviewService.getDocumentAPI(this.clientId, this.documentId)
      .then(result => {
        console.log(result);
        // TODO: to form the actual url
        this.documentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/sample.pdf');
      }).catch(ex => {
        console.log(ex);
        this.documentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/sample.pdf');
      });
  }

  backToClientPortal() {
    this.router.navigate(['./client-portal']);
  }
}
