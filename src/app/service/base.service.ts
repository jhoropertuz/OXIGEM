import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoind } from '../endpoind';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  headers = { headers: new HttpHeaders({
    'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers' : 'X-Requested-With,content-type'
  }) };
  constructor(private http: HttpClient) { }

  getJson(url):Observable<any>{
    return this.http.get<any>(Endpoind.API_BASE+url);
  }

  postJson(Data:any,url):Observable<any>{
    return this.http.post<any>(Endpoind.API_BASE+url,Data);
  }

  putJson(Data:any,url):Observable<any>{
    return this.http.patch<any>(Endpoind.API_BASE+url,Data);
  }
}
