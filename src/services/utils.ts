/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastAverageColor } from 'fast-average-color';

import { IAbilityRes, IStatRes, ITypeRes } from 'interfaces';

const IMAGES_URL = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';

interface IResponseData {
  [key: string]: any;
}

export const transformApiPokemonData = async (id: number, data: IResponseData) => {
  const { name, height, weight } = data;
  const abilities = data?.abilities?.map((abilityRes: IAbilityRes) => {
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

  const idPadded = id.toString().padStart(3, '0');
  const imgUrl = `${IMAGES_URL}${idPadded}.png`;
  const fac = new FastAverageColor();
  const { hex } = await fac.getColorAsync(imgUrl);

  const pokemon = {
    id: idPadded,
    name,
    imgUrl,
    stats,
    types,
    abilities,
    weight,
    height,
    color: hex,
  };

  return pokemon;
};