import { Component } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones';
import { Notificacion } from '../notificacion/notificacion';

@Component({
  selector: 'app-notificaciones',
  imports: [Notificacion],
  templateUrl: './notificaciones.html',
  styleUrl: './notificaciones.css',
})
export class Notificaciones {

  constructor(public notificacionService: NotificacionesService) {}

}
