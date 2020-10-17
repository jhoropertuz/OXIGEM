import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-oxigem',
  templateUrl: './listado-oxigem.page.html',
  styleUrls: ['./listado-oxigem.page.scss'],
})
export class ListadoOxigemPage implements OnInit {

  constructor(public Router:Router) { }

  ngOnInit() {
  }
 
  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }
}
