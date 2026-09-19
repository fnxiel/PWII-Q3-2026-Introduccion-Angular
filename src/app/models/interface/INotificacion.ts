export interface INotificacion {
    titulo: string;
    mensaje: string;
    tipo: 'info' | 'error' | 'success';
    fecha: Date;
}
