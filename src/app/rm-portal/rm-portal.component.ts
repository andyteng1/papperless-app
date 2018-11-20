import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RMPortalService } from './rm-portal.service';
import { RMPortalDataService } from './rm-portal-data.service';

@Component({
  selector: 'app-rm-portal',
  templateUrl: './rm-portal.component.html',
  styleUrls: ['./rm-portal.component.css']
})
export class RmPortalComponent implements OnInit {
  public listOfClientId: any;
  public listOfDocuments: any;
  public uploadSuccessMessage: string;
  public uploadErrorMessage: string;
  public selectedClient: string;

  public form: FormGroup;
  public loading: boolean;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private rmPortalService: RMPortalService,
    private router: Router,
    private rmPortalDataService: RMPortalDataService
  ) {
    this.listOfClientId = ['1', '2', '3', '4', '5'];
    this.selectedClient = '1';
    this.listOfDocuments = [
      { clientId: 1, document: 'abc.pdf', lastModified: '2018-11-19 18:00:00', status: 'Completed'},
      { clientId: 1, document: 'xyz.pdf', lastModified: '2018-11-19 17:00:00', status: 'Pending Signature'}
    ];
    this.uploadSuccessMessage = '';
    this.uploadErrorMessage = '';
    this.loading = false;
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      clientId: 0,
      document: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document').setValue(file);
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    console.log(this.selectedClient);
    console.log(this.form.get('document').value);
    input.append('clientId', this.selectedClient);
    input.append('document', this.form.get('document').value);
    return input;
  }

  onSubmit() {
    this.uploadErrorMessage = '';
    this.uploadSuccessMessage = '';
    const formModel = this.prepareSave();
    this.loading = true;
    this.rmPortalService.uploadAPI(formModel)
      .then(result => {
        console.log(result);
        this.uploadSuccessMessage = 'Document uploaded successfully.';
      }).catch(ex => {
        console.log(ex);
        this.uploadErrorMessage = 'Document upload failed. Please try again.';
      });
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  onChange(id) {
    this.selectedClient = (id.srcElement || id.target).value;
  }

  clearFile() {
    this.form.get('document').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  previewDocument(document) {
    this.rmPortalDataService.setDocumentData(document);
    this.router.navigate(['./rm-portal/doc/preview']);
  }
}
