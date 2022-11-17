/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IResponseData {
  [key: string]: any;
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

interface IResponseItem {
  name: string;
  url: string;
}
