import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateLevelPage } from './create-level.page';

const routes: Routes = [
  {
    path: '',
    component: CreateLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateLevelPageRoutingModule {}
