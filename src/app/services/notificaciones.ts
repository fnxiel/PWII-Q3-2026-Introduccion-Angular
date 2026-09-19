import { Injectable } from '@angular/core';
import { INotificacion } from '../models/interface/INotificacion';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  public notificaciones: INotificacion[] = [];

  agregarNotificacion(titulo: string, mensaje: string, tipo: 'info' | 'error' | 'success') {
    const notificacion: INotificacion = {
      titulo,
      mensaje,
      tipo,
      fecha: new Date()
    };

    this.notificaciones.push(notificacion);
    
  }

  limpiartNotificaciones() {
    this.notificaciones = [];
  }

}
