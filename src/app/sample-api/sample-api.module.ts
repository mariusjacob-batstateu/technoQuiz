import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SampleApiPageRoutingModule } from './sample-api-routing.module';

import { SampleApiPage } from './sample-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SampleApiPageRoutingModule
  ],
  declarations: [SampleApiPage]
})
export class SampleApiPageModule {}
