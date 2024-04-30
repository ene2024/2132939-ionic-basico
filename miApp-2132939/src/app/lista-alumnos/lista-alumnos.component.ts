import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {

  alumno: Alumno = {
    nombre: '',
    presente: false
  };

  alumnos: Alumno[] = []; // Define alumnos como un array vacío de objetos Alumno

  constructor(private actionSheetCtrl: ActionSheetController) { }

  result: string="";

  agregarAlumno(): void {
    this.alumnos.push(this.alumno); // Agrega el nuevo alumno al array de alumnos
    this.alumno = { // Reinicia el objeto alumno para limpiar el formulario
      nombre: '',
      presente: false
    };
  }

  ngOnInit() {}

  //alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
}
