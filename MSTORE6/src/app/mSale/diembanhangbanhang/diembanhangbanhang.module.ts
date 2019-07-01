import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiembanhangbanhangPage } from './diembanhangbanhang.page';

const routes: Routes = [
  {
    path: '',
    component: DiembanhangbanhangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiembanhangbanhangPage]
})
export class DiembanhangbanhangPageModule {}
