import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'solo-options',
    loadChildren: () => import('./solo-options/solo-options.module').then( m => m.SoloOptionsPageModule)
  },  {
    path: 'game-page',
    loadChildren: () => import('./game-page/game-page.module').then( m => m.GamePagePageModule)
  },
  {
    path: 'score-page',
    loadChildren: () => import('./score-page/score-page.module').then( m => m.ScorePagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
