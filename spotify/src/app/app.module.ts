import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [ // COMPONENTES, DIRECTIVAS Y PIPES
  AppComponent
    
  ],
  imports: [  //SOLO SE IMPORTAN OTROS MODULOS 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
