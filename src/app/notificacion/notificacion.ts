import { Component, Input } from '@angular/core';
import { INotificacion } from '../models/interface/INotificacion';

@Component({
  selector: 'app-notificacion',
  imports: [],
  templateUrl: './notificacion.html',
  styleUrl: './notificacion.css',
})
export class Notificacion implements INotificacion {
  @Input() mensaje: string = '';
  @Input() tipo: 'info' | 'error' | 'success' = 'info';
  @Input() fecha: Date = new Date();
  @Input() titulo: string = '';

}
