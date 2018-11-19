import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RMPortalDataService } from './../rm-portal/rm-portal-data.service';

@Component({
  selector: 'app-rm-portal-preview',
  templateUrl: './rm-portal-preview.component.html',
  styleUrls: ['./rm-portal-preview.component.css']
})
export class RmPortalPreviewComponent implements OnInit {

  constructor(
    private router: Router,
    private rmPortalDataService: RMPortalDataService
  ) { }

  ngOnInit() {
    // TODO: service to get actual document and display
    console.log(this.rmPortalDataService.getDocumentData());
  }

  backToRMPortal() {
    this.router.navigate(['./rm-portal']);
  }
}
