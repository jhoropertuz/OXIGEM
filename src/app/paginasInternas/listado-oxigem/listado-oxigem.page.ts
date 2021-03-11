import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BaseService } from '../../service/base.service';
import { SweetalertService } from '../../service/sweetalert.service';
@Component({
  selector: 'app-listado-oxigem',
  templateUrl: './listado-oxigem.page.html',
  styleUrls: ['./listado-oxigem.page.scss'],
})
export class ListadoOxigemPage implements OnInit {
  buscar=false;
  buscarAnimacion=false;
  listadoTipo;
  titulo;
  listado=[];
  listadoFilter=[];
  listadoTodos=[];
  constructor(public Router:Router,private ActivatedRoute: ActivatedRoute, public BaseService:BaseService,public Sweetalert:SweetalertService,private MenuController:MenuController) { }

  ngOnInit() {
    this.MenuController.enable(true, 'menu');
    this.listadoTipo=this.ActivatedRoute.snapshot.params.tipo;
    if(this.listadoTipo=='recoger'){
      this.titulo="Recoger"
      this.getListadoRecoger();
    }


  }
 
  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }

  irAccion(id){
    if (this.listadoTipo=='recoger') {
      this.Router.navigateByUrl('recoger-oxigem/'+id); 
    }
  }

  buscador(){
    if(this.buscar){
      this.buscarAnimacion=false;
      setTimeout(() => {
        this.buscar=false;
         this.ChangeSearchbar(''); 
      }, 900);
    }else{
      this.buscar=true;
      this.buscarAnimacion=true;
    }
  }

  buscando(){

  }

  getListadoRecoger(){
    /* alert('cargar recoger'); */
     this.BaseService.postJson('ServiciosEquipo','proximasPorRecoger').subscribe(res=>{
       if (res.RESPUESTA="EXITO") {
        if (res.DATOS) {
          this.listadoTodos=res.DATOS;
          this.listado=this.listadoTodos;
          this.listadoFilter=this.listadoTodos;
          console.log(this.listadoTodos);
          
        }else{
          this.Sweetalert.notificacion("info","No se encontraron servicios.");
        }
       }else{
         this.Sweetalert.modal("error",res.mensaje);
       }
      
     });
    
  }

  getListadoEntregar(){
    /* alert('cargar recoger'); */
  }

  doRefresh(event)  {
    this.getListadoRecoger();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ChangeSearchbar(value){
    let val=value;
    console.log(val);
     if (val && val.trim() !== '') {
      this.listado = this.listadoFilter.filter((item) => {
          return (item.servicioCodigo.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    } else{
      this.listado=this.listadoTodos;
    }
  }
}
