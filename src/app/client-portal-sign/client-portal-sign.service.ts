import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientPortalSignService {
  constructor(private http: Http) { }

  getDocumentAPI(clientId, documentId): Promise<any> {
    const reqObj = {
      clientId: clientId,
      documentId: documentId
    };
    const headers = new Headers({
    });
    return this.http.post('http://localhost:8080/xxx', JSON.stringify(reqObj))
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  saveDocumentAPI(clientId, documentId, signatureBased64): Promise<any> {
    const reqObj = {
      clientId: clientId,
      documentId: documentId,
      signature: signatureBased64
    };
    const headers = new Headers({
    });
    return this.http.post('http://localhost:8080/xxx', JSON.stringify(reqObj))
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
