import { IPokemonResult } from "./IPokemonResult";

export interface IPokemons{
    count: number;
    next: string;
    previous: string;
    results: IPokemonResult[];
}
