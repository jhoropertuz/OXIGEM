import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './service/auth.service';
import { LocalStorageService } from './service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public usuario;
  public appPages = [
    /* {
      title: 'Ajustes',
      url: '/',
      icon: 'cog'
    },
    {
      title: 'Generar Reporte',
      url: '/',
      icon: 'paper-plane'
    }, 
    {
      title: 'Salir',
      url: '/',
      icon: 'arrow-undo'
    }*/
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    public AuthService:AuthService,
    public LocalStorageService:LocalStorageService,
    private Router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.AuthService.usuario$.subscribe(usuario=>{
      console.log(usuario);
      this.usuario=usuario;
    });
     
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  salir(){
     this.LocalStorageService.deleteData("usuario");
     this.menu.enable(false,"menu");
     this.Router.navigateByUrl("login");
  }
}
