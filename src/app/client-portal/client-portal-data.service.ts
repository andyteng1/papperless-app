import { Injectable } from '@angular/core';

@Injectable()
export class ClientPortalDataService {
  documentData;

  setDocumentData(documentData) {
    this.documentData = documentData;
  }
  getDocumentData() {
    return this.documentData;
  }
}
