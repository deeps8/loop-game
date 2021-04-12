import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoopHomePageRoutingModule } from './loop-home-routing.module';

import { LoopHomePage } from './loop-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoopHomePageRoutingModule
  ],
  declarations: [LoopHomePage]
})
export class LoopHomePageModule {}
