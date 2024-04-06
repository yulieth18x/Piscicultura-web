import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatosComponent } from './components/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [], // Elimina DatePipe de aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
