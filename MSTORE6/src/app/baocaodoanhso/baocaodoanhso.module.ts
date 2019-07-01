import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BaocaodoanhsoPage } from './baocaodoanhso.page';

const routes: Routes = [
  {
    path: '',
    component: BaocaodoanhsoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BaocaodoanhsoPage]
})
export class BaocaodoanhsoPageModule {}
