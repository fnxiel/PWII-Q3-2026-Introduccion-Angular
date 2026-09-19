import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Notificaciones } from './notificaciones/notificaciones';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Notificaciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Otra cosa');
  protected readonly descripcion = signal('Mi primera aplicacion de angular para la clase de programacion web 2');
  readonly version = '1.0.0'
}
