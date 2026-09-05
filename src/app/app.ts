import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cancion } from './cancion/cancion';
import { ICancion } from './models/interface/ICancion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cancion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Otra cosa');
  protected readonly descripcion = signal('Mi primera aplicacion de angular para la clase de programacion web 2');
  readonly version = '1.0.0'

  readonly canciones: ICancion[] = [
    {
      titulo: 'Mi canción favorita',
      descripcion: 'Esta es una descripción de mi canción favorita. Es una canción que me gusta mucho y tiene un significado especial para mí.',
      duracion: '3:45',
      imagen: {
        src: 'https://fastly.picsum.photos/id/29/512/512.jpg?hmac=PhMlXnCFeD49G9m2xthtpAO7b4hplnbUkkLO6NXz_98',
        alt: 'Imagen de la canción'
      }
    },
    {
      titulo: 'Otra canción',
      descripcion: 'Esta es otra canción que me gusta mucho. Tiene un ritmo pegajoso y me hace sentir feliz.',
      duracion: '4:20',
      imagen: {
        src: 'https://fastly.picsum.photos/id/580/512/512.jpg?hmac=poB86b2Y7t2rbQxWKvX04w9E9hz3nD7bhs4znKJDwvU',
        alt: 'Imagen de otra canción'
      }
    },
    {
      titulo: 'Canción triste',
      descripcion: 'Esta es una canción triste que me hace reflexionar sobre la vida y las emociones.',
      duracion: '5:10',
      imagen: {
        src: 'https://fastly.picsum.photos/id/740/512/512.jpg?hmac=5-oRBsWXymrwkoT9RRuqcn-MpP0c3twRUtURG-HC2p4',
        alt: 'Imagen de la canción triste'
      }
    },
    {
      titulo: 'Canción animada',
      descripcion: 'Esta es una canción animada que me hace bailar y disfrutar del momento.',
      duracion: '3:30',
      imagen: {
        src: 'https://fastly.picsum.photos/id/516/512/512.jpg?hmac=lxa66D7NDDvQjOkcNiRQMAKlpTXVb1IGEbPQGCFprDE',
        alt: 'Imagen de la canción animada'
      }
    }
  ]

}
