import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregaOxigemPageRoutingModule } from './entrega-oxigem-routing.module';

import { EntregaOxigemPage } from './entrega-oxigem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaOxigemPageRoutingModule
  ],
  declarations: [EntregaOxigemPage]
})
export class EntregaOxigemPageModule {}
