import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'buscarmovies/:nombre',
    canActivate:[LoginGuard],
    loadChildren: () => import('./page/buscarmovies/buscarmovies.module').then( m => m.BuscarmoviesPageModule)
  },
  {
    path: 'detail/:id/:nombre',
    canActivate:[LoginGuard],
    loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'video/:id',
    loadChildren: () => import('./page/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
