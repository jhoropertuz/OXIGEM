import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregaOxigemPage } from './entrega-oxigem.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaOxigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregaOxigemPageRoutingModule {}
