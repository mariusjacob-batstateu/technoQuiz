import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoloOptionsPage } from './solo-options.page';

const routes: Routes = [
  {
    path: '',
    component: SoloOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoloOptionsPageRoutingModule {}
