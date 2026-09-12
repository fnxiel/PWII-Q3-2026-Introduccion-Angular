import { Component, Input } from '@angular/core';
import { IArtista } from '../models/interface/IArtista';

@Component({
  selector: 'app-artista',
  imports: [],
  templateUrl: './artista.html',
  styleUrl: './artista.css',
})
export class Artista implements IArtista {
  @Input() nombre: string = 'Nombre del artista';
  @Input() genero: string = 'Género musical del artista';
  @Input() pais: string = 'País de origen del artista';
  @Input() imagen: string = 'URL de la imagen del artista';
  @Input() biografia?: string | undefined;
}
