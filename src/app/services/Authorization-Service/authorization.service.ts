import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  visible: boolean = false;


 
  mediX_token: string;
  constructor(private _http: HttpClient) {
    this.mediX_token = localStorage.getItem('mediX_Auth') || '';
   
  }

  post(body: Object, rel_url: string): Observable<any> {
    const url = baseUrl + rel_url;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.mediX_token,
    };
    console.log(body);
    return this._http.post<any>(url, body, { headers });
  }

  get(rel_url: string): Observable<any> {
    const url = baseUrl + rel_url;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.mediX_token,
    };
    return this._http.get<any>(url, { headers });
  }



}
