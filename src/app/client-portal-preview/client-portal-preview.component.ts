import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientPortalDataService } from './../client-portal/client-portal-data.service';

@Component({
  selector: 'app-client-portal-preview',
  templateUrl: './client-portal-preview.component.html',
  styleUrls: ['./client-portal-preview.component.css']
})
export class ClientPortalPreviewComponent implements OnInit {

  constructor(
    private router: Router,
    private clientPortalDataService: ClientPortalDataService
  ) { }

  ngOnInit() {
    // TODO: service to get actual document and display
    console.log(this.clientPortalDataService.getDocumentData());
  }

  backToClientPortal() {
    this.router.navigate(['./client-portal']);
  }
}
