import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RMPortalService {
  constructor(private http: Http) { }

  /*getDocumentAPI(clientId, documentId): Promise<any> {
    const headers = new Headers({
    });
    return this.http.post('http://localhost:8080/xxx', formData)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }*/

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
