/* eslint-disable @typescript-eslint/no-explicit-any */
import { POKEMON_COLORS } from 'constants/pokemonColours';
import { STAT_MAP } from 'constants/stringMaps';

import { IAbilityRes, IStatRes, ITypeRes } from 'interfaces';

const IMAGES_URL = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';

interface IResponseData {
  [key: string]: any;
}

export const transformApiPokemonData = async (id: number, data: IResponseData) => {
  const { name, height, weight } = data;

  const formattedName = (name as string).split('-')[0];

  const abilities = data?.abilities?.map((abilityRes: IAbilityRes) => {
    return abilityRes.ability.name;
  });
  const stats = data.stats.map((statRes: IStatRes) => {
    return {
      name: STAT_MAP[statRes.stat.name as keyof typeof STAT_MAP],
      value: statRes.base_stat,
    };
  });
  const types = data.types.map((typeRes: ITypeRes) => {
    return typeRes.type.name.toUpperCase();
  });

  const idPadded = id.toString().padStart(3, '0');
  const imgUrl = `${IMAGES_URL}${idPadded}.png`;
  const color = POKEMON_COLORS[id as keyof typeof POKEMON_COLORS];

  const pokemon = {
    id: idPadded,
    name: formattedName,
    imgUrl,
    stats,
    types,
    abilities,
    weight,
    height,
    color,
  };

  return pokemon;
};
