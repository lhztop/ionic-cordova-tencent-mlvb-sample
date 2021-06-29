import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'config',
    loadChildren: () => import('./host/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./host/live/live.module').then( m => m.LivePageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./visit/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./visit/live/live.module').then( m => m.LivePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
