import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmaComponent } from './firma/firma.component';
import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
  declarations: [FirmaComponent],
  imports: [
    CommonModule,
    SignaturePadModule
  ],
  exports:[
    FirmaComponent
  ]
})
export class SharedModule { }
