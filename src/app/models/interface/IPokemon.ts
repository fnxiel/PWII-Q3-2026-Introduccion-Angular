import { ISprite } from "./ISprite";

export interface IPokemon{
    id: number;
    name: string;
    weight: number;
    height: number;
    sprites: ISprite;
}

