import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

import { Filesystem, Directory } from '@capacitor/filesystem';

import { Preferences } from '@capacitor/preferences';
//funcion para tomar foto  

@Injectable({
  providedIn: 'root'
})

export class FotoServiceService {

  public async addNewToGallery() {   

    // Toma Foto    
    
    const capturedPhoto = await Camera.getPhoto({      
    
    resultType: CameraResultType.Uri,      
    
    source: CameraSource.Camera,      quality: 100    
    
    });
  }

  constructor() { }

}
