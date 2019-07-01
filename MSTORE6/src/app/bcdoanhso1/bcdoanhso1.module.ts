import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Bcdoanhso1Page } from './bcdoanhso1.page';

const routes: Routes = [
  {
    path: '',
    component: Bcdoanhso1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Bcdoanhso1Page]
})
export class Bcdoanhso1PageModule {}
