import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  public fotos: Foto[] = this.fotoservice.fotos;

  constructor(public fotoservice: FotoServiceService) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.fotoservice.addNewToGallery();
  }

}