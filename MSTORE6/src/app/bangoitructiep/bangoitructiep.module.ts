import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BangoitructiepPage } from './bangoitructiep.page';

const routes: Routes = [
  {
    path: '',
    component: BangoitructiepPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BangoitructiepPage]
})
export class BangoitructiepPageModule {}
