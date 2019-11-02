import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorarioGeneradoPage } from './horario-generado.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioGeneradoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorarioGeneradoPage]
})
export class HorarioGeneradoPageModule {}
