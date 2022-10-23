import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntasecretaPageRoutingModule } from './preguntasecreta-routing.module';

import { PreguntasecretaPage } from './preguntasecreta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasecretaPageRoutingModule
  ],
  declarations: [PreguntasecretaPage]
})
export class PreguntasecretaPageModule {}
