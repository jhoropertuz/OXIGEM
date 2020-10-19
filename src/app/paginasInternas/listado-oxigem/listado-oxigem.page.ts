import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-oxigem',
  templateUrl: './listado-oxigem.page.html',
  styleUrls: ['./listado-oxigem.page.scss'],
})
export class ListadoOxigemPage implements OnInit {
  buscar=false;
  buscarAnimacion=false;
  constructor(public Router:Router) { }

  ngOnInit() {
  }
 
  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }

  buscador(){
    if(this.buscar){
      this.buscarAnimacion=false;
      setTimeout(() => {
        this.buscar=false;
      }, 900);
    }else{
      this.buscar=true;
      this.buscarAnimacion=true;
    }
    
  }
}
