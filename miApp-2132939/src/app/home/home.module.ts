import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { BottomDeleteComponent } from '../bottom-delete/bottom-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    ListaAlumnosComponent,
    BottomDeleteComponent]
})
export class HomePageModule {}