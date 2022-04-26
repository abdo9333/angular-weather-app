import { ApiWeather, Current_Condition } from './../model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { APIResponse } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<APIResponse<ApiWeather , Current_Condition>> {
    return this.http.get<APIResponse<ApiWeather, Current_Condition>>(`${env.BaseURl}`);
  }
}
