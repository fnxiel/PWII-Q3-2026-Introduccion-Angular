import { IImagen } from "./IImagen";

export interface ICancion {
  id: number; // Identificador único de la canción
  titulo: string;
  descripcion: string;
  duracion: string; // Duración en segundos
  imagen: IImagen; // Referencia a la interfaz IImagen
  destacado: boolean; // Indica si la canción es destacada o no
  resena?: string; // Reseña opcional de la canción
}