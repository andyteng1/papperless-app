import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientPortalDataService } from './client-portal-data.service';

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.css']
})
export class ClientPortalComponent implements OnInit {
  public listOfDocuments;

  constructor(
    private router: Router,
    private clientPortalDataService: ClientPortalDataService
  ) {
    this.listOfDocuments = [
      { clientId: 1, document: 'abc.pdf', lastModified: '2018-11-19 18:00:00', status: 'Completed'},
      { clientId: 1, document: 'xyz.pdf', lastModified: '2018-11-19 17:00:00', status: 'Pending Signature'}
    ];
  }

  ngOnInit() {
  }

  previewDocument(document) {
    this.clientPortalDataService.setDocumentData(document);
    this.router.navigate(['./client-portal/doc/preview']);
  }

  signDocument(document) {
    this.clientPortalDataService.setDocumentData(document);
    this.router.navigate(['./client-portal/doc/sign']);
  }

}
