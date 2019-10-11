import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TargetGebetanPage } from './target-gebetan.page';

const routes: Routes = [
  {
    path: '',
    component: TargetGebetanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TargetGebetanPage]
})
export class TargetGebetanPageModule {}
