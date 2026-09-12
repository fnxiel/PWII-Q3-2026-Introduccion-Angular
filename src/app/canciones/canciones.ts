import { Component, OnInit } from '@angular/core';
import { ICancion } from '../models/interface/ICancion';
import { Cancion } from '../cancion/cancion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canciones',
  imports: [Cancion],
  templateUrl: './canciones.html',
  styleUrl: './canciones.css',
})
export class Canciones implements OnInit {

  idFiltro: number | null = null;

  //Inyeccion de dependencias
  constructor(private route: ActivatedRoute) {
    console.log('este es el constructor')
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); // Muestra los parámetros de la URL en la consola
      this.idFiltro = params['id'] ? parseInt(params['id']) : null;
      
      if (this.idFiltro !== null) {
        this.cancionesFiltradas = this.canciones.filter(cancion => cancion.id === this.idFiltro);
      } else {
        this.cancionesFiltradas = this.canciones;
      }
    })
  }

  cancionesFiltradas: ICancion[] = []

  readonly canciones: ICancion[] = [
    {
      id: 1,
      titulo: 'Mi canción favorita',
      descripcion: 'Esta es una descripción de mi canción favorita. Es una canción que me gusta mucho y tiene un significado especial para mí.',
      duracion: '3:45',
      imagen: {
        src: 'https://fastly.picsum.photos/id/29/512/512.jpg?hmac=PhMlXnCFeD49G9m2xthtpAO7b4hplnbUkkLO6NXz_98',
        alt: 'Imagen de la canción'
      },
      destacado: true
    },
    {
      id: 2,
      titulo: 'Otra canción',
      descripcion: 'Esta es otra canción que me gusta mucho. Tiene un ritmo pegajoso y me hace sentir feliz.',
      duracion: '4:20',
      imagen: {
        src: 'https://fastly.picsum.photos/id/580/512/512.jpg?hmac=poB86b2Y7t2rbQxWKvX04w9E9hz3nD7bhs4znKJDwvU',
        alt: 'Imagen de otra canción'
      },
      destacado: true,
      resena: 'Esta canción es un clásico de mi infancia y siempre me trae buenos recuerdos. La letra es muy emotiva y la melodía es pegajosa.'
    },
    {
      id: 3,
      titulo: 'Canción triste',
      descripcion: 'Esta es una canción triste que me hace reflexionar sobre la vida y las emociones.',
      duracion: '5:10',
      imagen: {
        src: 'https://fastly.picsum.photos/id/740/512/512.jpg?hmac=5-oRBsWXymrwkoT9RRuqcn-MpP0c3twRUtURG-HC2p4',
        alt: 'Imagen de la canción triste'
      },
      destacado: false,
      resena: 'Esta canción me hace sentir melancólico y me recuerda momentos difíciles de mi vida. La letra es muy profunda y la melodía es conmovedora.'
    },
    {
      id: 4,
      titulo: 'Canción animada',
      descripcion: 'Esta es una canción animada que me hace bailar y disfrutar del momento.',
      duracion: '3:30',
      imagen: {
        src: 'https://fastly.picsum.photos/id/516/512/512.jpg?hmac=lxa66D7NDDvQjOkcNiRQMAKlpTXVb1IGEbPQGCFprDE',
        alt: 'Imagen de la canción animada'
      },
      destacado: false
    }
  ]
}
