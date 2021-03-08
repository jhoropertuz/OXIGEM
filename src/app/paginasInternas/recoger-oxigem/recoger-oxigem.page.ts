import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { FirmaComponent } from 'src/app/shareds/firma/firma.component';

@Component({
  selector: 'app-recoger-oxigem',
  templateUrl: './recoger-oxigem.page.html',
  styleUrls: ['./recoger-oxigem.page.scss'],
})
export class RecogerOxigemPage implements OnInit {

  codigo="xxxx";
  firmaBase64;
  constructor() { }

  ngOnInit() {
  }

  recogido(){
    alert("recogido");
  }

  firmaBase64Event($event){
    this.firmaBase64=$event;
  }

}
