import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecogerOxigemPageRoutingModule } from './recoger-oxigem-routing.module';

import { RecogerOxigemPage } from './recoger-oxigem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecogerOxigemPageRoutingModule
  ],
  declarations: [RecogerOxigemPage]
})
export class RecogerOxigemPageModule {}
