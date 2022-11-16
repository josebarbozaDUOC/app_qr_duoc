import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

import { LectorQrComponent } from './../../components/lector-qr/lector-qr.component';
import { MiClaseComponent } from '../../components/mi-clase/mi-clase.component';
import { MiApiComponent } from '../../components/mi-api/mi-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'lector-qr',
        component: LectorQrComponent
      },
      {
        path: 'mi-clase',
        component: MiClaseComponent
      },
      {
        path: 'mi-api',
        component: MiApiComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
