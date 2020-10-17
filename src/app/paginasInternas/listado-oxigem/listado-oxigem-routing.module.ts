import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoOxigemPage } from './listado-oxigem.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoOxigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoOxigemPageRoutingModule {}
