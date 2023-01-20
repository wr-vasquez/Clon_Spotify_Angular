import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [ // COMPONENTES, DIRECTIVAS Y PIPES
    AppComponent, ExampleComponent,
    
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
