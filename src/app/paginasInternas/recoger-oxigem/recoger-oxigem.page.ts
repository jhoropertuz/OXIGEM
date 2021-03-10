import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';
import { FirmaComponent } from 'src/app/shareds/firma/firma.component';

@Component({
  selector: 'app-recoger-oxigem',
  templateUrl: './recoger-oxigem.page.html',
  styleUrls: ['./recoger-oxigem.page.scss'],
})
export class RecogerOxigemPage implements OnInit {

  codigo="xxxx";
  firmaBase64;
  Servicio;
  constructor(public Router:Router,private BaseService:BaseService, public Sweetalert:SweetalertService,private ActivatedRoute: ActivatedRoute) { 
    let id=this.ActivatedRoute.snapshot.params.id;
    if(id){
      let loading=this.BaseService.presentLoading();
      this.BaseService.postJson('ServiciosEquipo','buscarPorId',{id:id}).subscribe(res=>{
        console.log(res);
        if (res.RESPUESTA="EXITO") {
          this.Servicio=res.DATOS;
        }else{
          this.Sweetalert.modal("error",res.MENSAJE);
        }
        loading.then(e=>{
          e.dismiss();});
      });
    }else{
        this.Sweetalert.notificacion("info","Datos Insuficientes.")
        this.Router.navigateByUrl("listado-oxigem/recoger");
    }
  }

  ngOnInit() {

  }

  recogido(){
    alert("recogido");
  }

  firmaBase64Event($event){
    this.firmaBase64=$event;
  }
}
