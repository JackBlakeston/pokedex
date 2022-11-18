import { POKEMON_STATS, POKEMON_TYPES } from '../../enums';

export const BULBASAUR = {
  id: '001',
  name: 'bulbasaur',
  imgUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png',
  stats: [
    {
      name: POKEMON_STATS.HP,
      value: 45,
    },
    {
      name: POKEMON_STATS.ATTACK,
      value: 49,
    },
    {
      name: POKEMON_STATS.DEFENSE,
      value: 49,
    },
    {
      name: POKEMON_STATS.SPECIAL_ATTACK,
      value: 65,
    },
    {
      name: POKEMON_STATS.SPECIAL_DEFENSE,
      value: 65,
    },
    {
      name: POKEMON_STATS.SPEED,
      value: 45,
    },
  ],
  types: [POKEMON_TYPES.GRASS, POKEMON_TYPES.POISON],
  abilities: ['overgrow', 'chlorophyll'],
  weight: 6.9,
  height: 0.7,
  color: '#6ca584',
};
