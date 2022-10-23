import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarpasswordPage } from './recuperarpassword.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarpasswordPage
  },
  {
    path: 'preguntasecreta',
    loadChildren: () => import('./preguntasecreta/preguntasecreta.module').then( m => m.PreguntasecretaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarpasswordPageRoutingModule {}
