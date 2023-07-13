import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoloOptionsPageRoutingModule } from './solo-options-routing.module';

import { SoloOptionsPage } from './solo-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoloOptionsPageRoutingModule
  ],
  declarations: [SoloOptionsPage]
})
export class SoloOptionsPageModule {}
