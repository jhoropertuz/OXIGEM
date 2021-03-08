import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'entrega-oxigem/:id',
    loadChildren: () => import('./paginasInternas/entrega-oxigem/entrega-oxigem.module').then( m => m.EntregaOxigemPageModule)
  },
  {
    path: 'recoger-oxigem/:id',
    loadChildren: () => import('./paginasInternas/recoger-oxigem/recoger-oxigem.module').then( m => m.RecogerOxigemPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./paginasInternas/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'escaneo-qr-oxigem',
    loadChildren: () => import('./paginasInternas/escaneo-qr-oxigem/escaneo-qr-oxigem.module').then( m => m.EscaneoQrOxigemPageModule)
  },
  {
    path: 'detalles-usuario/:id',
    loadChildren: () => import('./paginasInternas/detalles-usuario/detalles-usuario.module').then( m => m.DetallesUsuarioPageModule)
  },
  {
    path: 'listado-oxigem/:tipo',
    loadChildren: () => import('./paginasInternas/listado-oxigem/listado-oxigem.module').then( m => m.ListadoOxigemPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
