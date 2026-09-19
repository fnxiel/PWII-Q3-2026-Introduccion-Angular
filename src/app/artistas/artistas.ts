import { Component } from '@angular/core';
import { Artista } from '../artista/artista';
import { IArtista } from '../models/interface/IArtista';
import { NotificacionesService } from '../services/notificaciones';

@Component({
  selector: 'app-artistas',
  imports: [Artista],
  templateUrl: './artistas.html',
  styleUrl: './artistas.css',
})
export class Artistas {
  readonly artistas: IArtista[] = [
    {
      nombre: 'Artista 1',
      genero: 'Pop',
      pais: 'Estados Unidos',
      imagen: 'https://fastly.picsum.photos/id/237/512/512.jpg?hmac=5o6J0Z8g3F7z5G9k2xthtpAO7b4hplnbUkkLO6NXz_98',
      biografia: 'Biografía del Artista 1. Este artista es conocido por su estilo único y ha ganado varios premios a lo largo de su carrera.'
    },
    {
      nombre: 'Artista 2',
      genero: 'Rock',
      pais: 'Reino Unido',
      imagen: 'https://fastly.picsum.photos/id/238/512/512.jpg?hmac=poB86b2Y7t2rbQxWKvX04w9E9hz3nD7bhs4znKJDwvU',
      biografia: 'Biografía del Artista 2. Este artista ha sido una figura influyente en la escena musical y ha lanzado varios álbumes exitosos.'
    },
    {
      nombre: 'Artista 3',
      genero: 'Jazz',
      pais: 'Francia',
      imagen: 'https://fastly.picsum.photos/id/239/512/512.jpg?hmac=5-oRBsWXymrwkoT9RRuqcn-MpP0c3twRUtURG-HC2p4',
      biografia: 'Biografía del Artista 3. Este artista es conocido por su talento excepcional y ha colaborado con muchos músicos famosos.'
    }
  ]

  constructor(public notificacionesService: NotificacionesService) {}

}
