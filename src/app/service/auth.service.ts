import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  public usuario = new Subject<void>();
  public usuario$ = this.usuario.asObservable();

  constructor( public LocalStorageService:LocalStorageService ) {}

  DatosUsuario(datos){
    this.LocalStorageService.postDatoJson("usuario",datos);
    this.usuario.next(datos);
  }



}
