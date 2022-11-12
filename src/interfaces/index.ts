export interface IPokemon {
  id: number;
  name: string;
  imgUrl: string;
  stats: IStat[];
  types: string[];
  abilities: string[];
  weight: number;
  height: number;
}

export interface IStat {
  name: string;
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
