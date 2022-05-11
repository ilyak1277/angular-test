import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IframService {
  constructor(private client: HttpClient) {}

  get(): Observable<any> {
    console.log('enter service');
    const options = {
      responseType: 'blob' as const,
      observe: 'response' as const,
      headers: {
        Authorization: 'Bearer abcd1234',
      },
    };

    return this.client.get(
      'https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true',
      options
    );
  }
}
