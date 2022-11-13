import { POKEMON_STATS, POKEMON_TYPES } from 'enums';

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

export interface IAbilityRes {
  ability: IResponseItem;
  is_hidden: boolean;
  slot: number;
}

export interface IStatRes {
  base_stat: number;
  effort: number;
  stat: IResponseItem;
}

export interface ITypeRes {
  slot: number;
  type: IResponseItem;
}

export interface IResponseItem {
  name: string;
  url: string;
}
