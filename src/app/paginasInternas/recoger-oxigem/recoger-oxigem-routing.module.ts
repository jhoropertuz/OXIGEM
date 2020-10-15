import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecogerOxigemPage } from './recoger-oxigem.page';

const routes: Routes = [
  {
    path: '',
    component: RecogerOxigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecogerOxigemPageRoutingModule {}
