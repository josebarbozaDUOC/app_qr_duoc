import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasecretaPage } from './preguntasecreta.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasecretaPage
  },
  {
    path: 'correcto',
    loadChildren: () => import('./correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasecretaPageRoutingModule {}
