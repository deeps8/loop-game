import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLevelPageRoutingModule } from './create-level-routing.module';

import { CreateLevelPage } from './create-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateLevelPageRoutingModule
  ],
  declarations: [CreateLevelPage]
})
export class CreateLevelPageModule {}
