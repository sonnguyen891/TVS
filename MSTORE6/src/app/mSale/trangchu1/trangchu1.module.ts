import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Trangchu1Page } from './trangchu1.page';

const routes: Routes = [
  {
    path: '',
    component: Trangchu1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Trangchu1Page]
})
export class Trangchu1PageModule {}
