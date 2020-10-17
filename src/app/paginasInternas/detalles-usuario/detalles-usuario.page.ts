import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.page.html',
  styleUrls: ['./detalles-usuario.page.scss'],
})
export class DetallesUsuarioPage implements OnInit {
  userMapa=false;
  userEstadistica=false;
  detallesProducto=true;
  constructor( public Router:Router ) { }

  ngOnInit() {
  }
  
  cambiarContenido(nombreContenido){
    this.cerrarContenido();
    switch (nombreContenido) {
      case 'userMapa':
        this.userMapa=true;
        break;
      case 'detallesProducto':
        this.detallesProducto=true;
      break;
      case 'userEstadistica':
        this.userEstadistica=true;
      break
      default:
        break;
    }
  }

  cerrarContenido(){
    this.userMapa=false;
    this.detallesProducto=false;
    this.userEstadistica=false;
  }

  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }
  
}
