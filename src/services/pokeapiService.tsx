import { IAbilityRes, IPokemon, IStatRes, ITypeRes } from 'interfaces';

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

  const { name, height, weight } = data;
  const imgUrl = data.sprites.front_default;
  const abilities = data.abilities.map((abilityRes: IAbilityRes) => {
    return abilityRes.ability.name;
  });
  const stats = data.stats.map((statRes: IStatRes) => {
    return {
      name: statRes.stat.name,
      value: statRes.base_stat,
    };
  });
  const types = data.types.map((typeRes: ITypeRes) => {
    return typeRes.type.name;
  });

  const pokemon = {
    id,
    name,
    imgUrl,
    stats,
    types,
    abilities,
    weight,
    height,
  };
  return pokemon;
};
