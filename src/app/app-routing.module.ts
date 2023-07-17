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
  },
  {
    path: 'score-page',
    loadChildren: () => import('./score-page/score-page.module').then( m => m.ScorePagePageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },  {
    path: 'sample-api',
    loadChildren: () => import('./sample-api/sample-api.module').then( m => m.SampleApiPageModule)
  },


  // { path: 'game-page', redirectTo: 'dictionary', pathMatch: 'full' },
  // { path: 'dictionary', component: DictionaryComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
