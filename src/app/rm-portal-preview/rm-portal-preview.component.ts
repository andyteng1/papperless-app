import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { RMPortalDataService } from './../rm-portal/rm-portal-data.service';
import { RMPortalPreviewService } from './rm-portal-preview.service';

@Component({
  selector: 'app-rm-portal-preview',
  templateUrl: './rm-portal-preview.component.html',
  styleUrls: ['./rm-portal-preview.component.css']
})
export class RmPortalPreviewComponent implements OnInit {
  private clientId;
  private documentId;
  private documentUrl: SafeResourceUrl;

  constructor(
    private router: Router,
    private rmPortalDataService: RMPortalDataService,
    private rmPortalPreviewService: RMPortalPreviewService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.clientId = this.rmPortalDataService.getDocumentData().clientId;
    this.documentId = this.rmPortalDataService.getDocumentData().document;
    this.rmPortalPreviewService.getDocumentAPI(this.clientId, this.documentId)
      .then(result => {
        console.log(result);
        // TODO: to form the actual url
        this.documentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/sample.pdf');
      }).catch(ex => {
        console.log(ex);
        this.documentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/sample.pdf');
      });
  }

  backToRMPortal() {
    this.router.navigate(['./rm-portal']);
  }
}
