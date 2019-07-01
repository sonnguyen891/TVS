import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiembanhangkhohangPage } from './diembanhangkhohang.page';

const routes: Routes = [
  {
    path: '',
    component: DiembanhangkhohangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiembanhangkhohangPage]
})
export class DiembanhangkhohangPageModule {}
