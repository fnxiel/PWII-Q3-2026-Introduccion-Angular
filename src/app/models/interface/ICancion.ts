import { IImagen } from "./IImagen";

export interface ICancion {
  titulo: string;
  descripcion: string;
  duracion: string; // Duración en segundos
  imagen: IImagen; // Referencia a la interfaz IImagen
}