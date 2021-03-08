import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesUsuarioPageRoutingModule } from './detalles-usuario-routing.module';

import { DetallesUsuarioPage } from './detalles-usuario.page';
import { SharedModule } from 'src/app/shareds/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesUsuarioPageRoutingModule,
    SharedModule
  ],
  declarations: [DetallesUsuarioPage]
})
export class DetallesUsuarioPageModule {}
