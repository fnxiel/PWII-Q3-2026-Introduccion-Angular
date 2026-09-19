import { Routes } from '@angular/router';
import { App } from './app';
import { Canciones } from './canciones/canciones';
import { Artistas } from './artistas/artistas';
import { Pokemons } from './pokemons/pokemons';

export const routes: Routes = [
    {
        path: '', component: Pokemons,
    },
    {
        path: 'canciones', component: Canciones,
    },
    {
        path: 'artistas', component: Artistas,
    },
    {
        path: 'pokemons', component: Pokemons,
    }
];
