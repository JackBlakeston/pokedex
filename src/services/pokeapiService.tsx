import { transformApiPokemonData } from './utils';

import { IPokemon } from 'interfaces';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/';

export const getPaginatedPokemonUrls = async (start: number, end: number): Promise<IPokemon[]> => {
  const url = `${POKEAPI_URL}pokemon/?offset=${start}&?limit=${end}`;

  const res = await fetch(url);
  const data = await res.json();
  const pokemonUrlList = data.results;

  return pokemonUrlList;
};

export const getPokemonById = async (id: number): Promise<IPokemon> => {
  const url = `${POKEAPI_URL}pokemon/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  const pokemon = transformApiPokemonData(id, data);
  return pokemon;
};
