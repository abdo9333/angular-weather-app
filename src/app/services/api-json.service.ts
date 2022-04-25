import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${env.BaseURl}`);
  }
}
