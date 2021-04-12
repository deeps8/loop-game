import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoopLevelPageRoutingModule } from './loop-level-routing.module';

import { LoopLevelPage } from './loop-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoopLevelPageRoutingModule
  ],
  declarations: [LoopLevelPage]
})
export class LoopLevelPageModule {}
