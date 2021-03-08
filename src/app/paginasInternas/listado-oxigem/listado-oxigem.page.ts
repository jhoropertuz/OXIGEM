import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(public Router:Router,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
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
    this.listadoTodos=[
      {codigo: 'OXIMED-12',cliente:'Jonathan Romero', retener:'50.000' , fchRecoger:'23-07-2020'},
      {codigo: 'OXIMED-345',cliente:'Jonathan Romero', retener:'50.000' , fchRecoger:'23-07-2020'},
      {codigo: 'OXIMED-125',cliente:'Jonathan Romero', retener:'50.000' , fchRecoger:'23-07-2020'},
      {codigo: 'OXIMED-145',cliente:'Jonathan Romero', retener:'50.000' , fchRecoger:'23-07-2020'},
      {codigo: 'OXIMED-12345',cliente:'Jonathan Romero', retener:'50.000' , fchRecoger:'23-07-2020'},
    ];
    this.listado=this.listadoTodos;
    this.listadoFilter=this.listadoTodos;
  }

  getListadoEntregar(){
    /* alert('cargar recoger'); */
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ChangeSearchbar(value){
    let val=value;
    console.log(val);
     if (val && val.trim() !== '') {
      this.listado = this.listadoFilter.filter((item) => {
          return (item.codigo.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    } else{
      this.listado=this.listadoTodos;
    }
  }
}
