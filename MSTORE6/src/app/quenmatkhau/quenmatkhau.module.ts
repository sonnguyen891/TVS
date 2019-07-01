import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuenmatkhauPage } from './quenmatkhau.page';

const routes: Routes = [
  {
    path: '',
    component: QuenmatkhauPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuenmatkhauPage]
})
export class QuenmatkhauPageModule {}
