import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoOxigemPageRoutingModule } from './listado-oxigem-routing.module';

import { ListadoOxigemPage } from './listado-oxigem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoOxigemPageRoutingModule
  ],
  declarations: [ListadoOxigemPage]
})
export class ListadoOxigemPageModule {}
