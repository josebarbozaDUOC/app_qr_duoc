import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule }  from '@ionic/angular';

import { LectorQrComponent } from './lector-qr/lector-qr.component';
import { MiClaseComponent } from './mi-clase/mi-clase.component';
import { MiApiComponent } from './mi-api/mi-api.component';

@NgModule({
  declarations: [
    //aqui declaramos todos los componentes
    LectorQrComponent,
    MiClaseComponent,
    MiApiComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    //aqui exportamos todos los componentes
    LectorQrComponent,
    MiClaseComponent,
    MiApiComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
