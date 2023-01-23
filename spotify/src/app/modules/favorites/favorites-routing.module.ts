import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPagesComponent } from './pages/favorites-pages/favorites-pages.component';

const routes: Routes = [
  {
    path: "",
    component: FavoritesPagesComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
