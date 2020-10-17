import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor( public Router:Router) { }

  ngOnInit() {
  }


  irRuta(ruta){
     this.Router.navigateByUrl(ruta);
  }

}
