import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  alumnos: string[] = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
}
