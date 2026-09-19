import { Component, OnInit, signal } from '@angular/core';
import { Pokeapi } from '../services/pokeapi';
import { IPokemons } from '../models/interface/IPokemons';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons implements OnInit {

  public pokemons = signal<IPokemons | undefined>(undefined);

  constructor(public pokeapi: Pokeapi) {}

  ngOnInit(): void {
    this.pokeapi.getPokemons().subscribe((data: IPokemons) => {
      console.log(data);
      this.pokemons.set(data);
    });
  }

}
