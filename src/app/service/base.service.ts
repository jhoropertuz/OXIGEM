import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoind } from '../endpoind';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  headers = { headers: new HttpHeaders({
    'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers' : 'Access-Control-Allow-Headers,Content-Type,Access-Control-All-Methods'
  }) };

   
  constructor(private http: HttpClient,public loadingController: LoadingController) { }
  
  async presentLoading( mensaje="Cargando...",clase='my-custom-class') {
    let loading = await this.loadingController.create({
      cssClass: clase,
      message: mensaje
    });
    loading.present();
    return  loading;
  }

  getJson(url):Observable<any>{
    return this.http.get<any>(Endpoind.API_BASE+url);
  }

  postJson(controlador,operacion,Data:any={},loading=true):Observable<any>{
    Data.controlador=controlador;
    Data.operacion=operacion;
    return this.http.post<any>(Endpoind.API_BASE,Data);
  }

  putJson(Data:any,url):Observable<any>{
    return this.http.patch<any>(Endpoind.API_BASE+url,Data);
  }
}
