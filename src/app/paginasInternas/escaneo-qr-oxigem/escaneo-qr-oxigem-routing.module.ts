import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneoQrOxigemPage } from './escaneo-qr-oxigem.page';

const routes: Routes = [
  {
    path: '',
    component: EscaneoQrOxigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneoQrOxigemPageRoutingModule {}
