import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';

const routes: Routes = [
  {
    path:'login', //TODO http:localhost:4200/auth/login
    component: AuthPagesComponent
  },
  {
    //De esta forma podemos redireccinar a login aun cuando la ruta que se busca no existe
    path:'**', //TODO http:localhost:4200/auth/login
    redirectTo:'/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
