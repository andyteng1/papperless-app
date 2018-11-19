import { Injectable } from '@angular/core';

@Injectable()
export class RMPortalDataService {
  documentData;

  setDocumentData(documentData) {
    this.documentData = documentData;
  }
  getDocumentData() {
    return this.documentData;
  }
}
