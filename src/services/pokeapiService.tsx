import { transformApiPokemonData } from './utils';

import { POKEAPI_URL } from '../constants/strings';

import { IPokemon } from '../interfaces';

export const getPokemonById = async (id: number): Promise<IPokemon> => {
  const url = `${POKEAPI_URL}pokemon/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  const pokemon = transformApiPokemonData(id, data);
  return pokemon;
};
