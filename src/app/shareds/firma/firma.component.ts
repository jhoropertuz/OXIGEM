import { Component, OnInit,ViewChild,Output, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.scss'],
})
export class FirmaComponent implements OnInit {
  firmaBase64;
  classBorderCanvas="rojo";
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @Output() firmaBase64Event = new EventEmitter<string>();
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'mixWidth':1,
    'minWidth': 1,
    'canvasHeight': 300

  };

  /* 'backgroundColor':"rgb(255,255,255)" */

  constructor() {
    // no-op
  }

  ngOnInit() {
  }

 /*  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  } */

  drawComplete() {
    this.firmaBase64=this.signaturePad.toDataURL();
    console.log(this.firmaBase64);
    
    this.firmaBase64Event.emit(this.firmaBase64);
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    this.classBorderCanvas="verde";
    console.log('begin drawing');
  }

  limpiarTablero(){
    this.signaturePad.clear();
    this.classBorderCanvas="rojo";
    this.firmaBase64Event.emit('');
  }

}
