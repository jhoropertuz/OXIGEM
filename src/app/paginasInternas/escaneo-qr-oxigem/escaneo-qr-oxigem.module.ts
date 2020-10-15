import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneoQrOxigemPageRoutingModule } from './escaneo-qr-oxigem-routing.module';

import { EscaneoQrOxigemPage } from './escaneo-qr-oxigem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneoQrOxigemPageRoutingModule
  ],
  declarations: [EscaneoQrOxigemPage]
})
export class EscaneoQrOxigemPageModule {}
