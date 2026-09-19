import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemons } from '../models/interface/IPokemons';

@Injectable({
  providedIn: 'root',
})
export class Pokeapi {
  private urlBase = 'https://pokeapi.co/api/v2';

  constructor(private cliente: HttpClient) {}

  //Trae todos los pokemons desde el backend
  getPokemons() {
    return this.cliente.get<IPokemons>(`${this.urlBase}/pokemon`)
  }

}
