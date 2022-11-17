import { POKEMON_STATS, POKEMON_TYPES } from '../enums';

export interface IPokemon {
  id: string;
  name: string;
  imgUrl: string;
  stats: IStat[];
  types: POKEMON_TYPES[];
  abilities: string[];
  weight: number;
  height: number;
  color: string;
}

export interface IStat {
  name: POKEMON_STATS;
  value: number;
}
