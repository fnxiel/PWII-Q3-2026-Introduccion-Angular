import { Routes } from '@angular/router';
import { App } from './app';
import { Canciones } from './canciones/canciones';
import { Artistas } from './artistas/artistas';

export const routes: Routes = [
    {
        path: '', component: Canciones,
    },
    {
        path: 'canciones', component: Canciones,
    },
    {
        path: 'artistas', component: Artistas,
    }
];
