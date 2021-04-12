import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoopHomePage } from './loop-home.page';

const routes: Routes = [
  {
    path: '',
    component: LoopHomePage
  },
  {
    path: 'level/:lvl',
    loadChildren: () => import('../loop-level/loop-level.module').then( m => m.LoopLevelPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('../create-level/create-level.module').then( m => m.CreateLevelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoopHomePageRoutingModule {}
