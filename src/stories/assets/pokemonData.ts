import { POKEMON_STATS, POKEMON_TYPES } from '../../enums';

export const bulbasaurData = {
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

export const pikachuData = {
  id: '025',
  name: 'pikachu',
  imgUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/025.png',
  stats: [
    {
      name: POKEMON_STATS.HP,
      value: 35,
    },
    {
      name: POKEMON_STATS.ATTACK,
      value: 55,
    },
    {
      name: POKEMON_STATS.DEFENSE,
      value: 40,
    },
    {
      name: POKEMON_STATS.SPECIAL_ATTACK,
      value: 50,
    },
    {
      name: POKEMON_STATS.SPECIAL_DEFENSE,
      value: 50,
    },
    {
      name: POKEMON_STATS.SPEED,
      value: 90,
    },
  ],
  types: [POKEMON_TYPES.ELECTRIC],
  abilities: ['static', 'lightning-rod'],
  weight: 6,
  height: 0.4,
  color: '#d7bb70',
};

export const charizardData = {
  id: '006',
  name: 'charizard',
  imgUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png',
  stats: [
    {
      name: POKEMON_STATS.HP,
      value: 78,
    },
    {
      name: POKEMON_STATS.ATTACK,
      value: 84,
    },
    {
      name: POKEMON_STATS.DEFENSE,
      value: 78,
    },
    {
      name: POKEMON_STATS.SPECIAL_ATTACK,
      value: 109,
    },
    {
      name: POKEMON_STATS.SPECIAL_DEFENSE,
      value: 85,
    },
    {
      name: POKEMON_STATS.SPEED,
      value: 100,
    },
  ],
  types: [POKEMON_TYPES.FIRE, POKEMON_TYPES.FLYING],
  abilities: ['blaze', 'solar-power'],
  weight: 90.5,
  height: 1.7,
  color: '#b79b7c',
};

export const blastoiseData = {
  id: '009',
  name: 'blastoise',
  imgUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png',
  stats: [
    {
      name: POKEMON_STATS.HP,
      value: 79,
    },
    {
      name: POKEMON_STATS.ATTACK,
      value: 83,
    },
    {
      name: POKEMON_STATS.DEFENSE,
      value: 100,
    },
    {
      name: POKEMON_STATS.SPECIAL_ATTACK,
      value: 85,
    },
    {
      name: POKEMON_STATS.SPECIAL_DEFENSE,
      value: 105,
    },
    {
      name: POKEMON_STATS.SPEED,
      value: 78,
    },
  ],
  types: [POKEMON_TYPES.WATER],
  abilities: ['torrent', 'rain-dish'],
  weight: 85.5,
  height: 1.6,
  color: '#91939e',
};

export const bellsproutData = {
  id: '069',
  name: 'bellsprout',
  imgUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/069.png',
  stats: [
    {
      name: POKEMON_STATS.HP,
      value: 50,
    },
    {
      name: POKEMON_STATS.ATTACK,
      value: 75,
    },
    {
      name: POKEMON_STATS.DEFENSE,
      value: 35,
    },
    {
      name: POKEMON_STATS.SPECIAL_ATTACK,
      value: 70,
    },
    {
      name: POKEMON_STATS.SPECIAL_DEFENSE,
      value: 30,
    },
    {
      name: POKEMON_STATS.SPEED,
      value: 40,
    },
  ],
  types: [POKEMON_TYPES.GRASS, POKEMON_TYPES.POISON],
  abilities: ['chlorophyll', 'gluttony'],
  weight: 4,
  height: 0.7,
  color: '#afbf81',
};
