import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
//import { ListaAlumnosComponent } from '/Users/josel/OneDrive/Escritorio/AppsMov/2132939/miApp-2132939/src/app/lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from './productos/productos.component'; 
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //ListaAlumnosComponent
    ProductosComponent,
    ProductoDetalleComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

