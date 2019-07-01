import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TracuugoiPage } from './tracuugoi.page';

const routes: Routes = [
  {
    path: '',
    component: TracuugoiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TracuugoiPage]
})
export class TracuugoiPageModule {}
