import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router:Router, private LocalStorageService:LocalStorageService, private AuthService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    let usuario = this.LocalStorageService.getDatoJson("usuario");
    console.log("canActivate");
    console.log(usuario);
    if(usuario){
       this.AuthService.DatosUsuario(usuario);
       return true;
    }
    this.router.navigateByUrl("login");
    return false;
  }
  
}
