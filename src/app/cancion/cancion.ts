import { Component, Input } from '@angular/core';
import { IImagen } from '../models/interface/IImagen';
import { ICancion } from '../models/interface/ICancion';

@Component({
  selector: 'app-cancion',
  imports: [],
  templateUrl: './cancion.html',
  styleUrl: './cancion.css',
})
export class Cancion implements ICancion {
  @Input() id: number = 0;
  @Input() titulo: string = 'Mi canción favorita';
  @Input() descripcion: string = 'Esta es una descripción de mi canción favorita. Es una canción que me gusta mucho y tiene un significado especial para mí.';
  @Input() duracion: string = '3:45';
  @Input() imagen: IImagen = { 
    src: 'https://fastly.picsum.photos/id/29/512/512.jpg?hmac=PhMlXnCFeD49G9m2xthtpAO7b4hplnbUkkLO6NXz_98', 
    alt: 'Imagen de la canción' 
  };
  @Input() destacado: boolean = false;
  @Input() resena?: string;

}
