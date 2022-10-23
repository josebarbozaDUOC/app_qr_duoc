import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'recuperarpassword',
    loadChildren: () => import('./pages/recuperarpassword/recuperarpassword.module').then( m => m.RecuperarpasswordPageModule)
  },
  {
    path: 'preguntasecreta',
    loadChildren: () => import('./pages/recuperarpassword/preguntasecreta/preguntasecreta.module').then( m => m.PreguntasecretaPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./pages/recuperarpassword/preguntasecreta/correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/recuperarpassword/preguntasecreta/incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'miclase',
    loadChildren: () => import('./pages/miclase/miclase.module').then( m => m.MiclasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
