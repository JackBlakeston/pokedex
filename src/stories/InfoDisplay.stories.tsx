import { ComponentStory } from '@storybook/react';

import InfoDisplay from 'components/InfoDisplay/InfoDisplay';
import { POKEMON_STATS } from 'enums';

const bulbasaurData = {
  id: 1,
  name: 'bulbasaur',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
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
  types: ['grass', 'poison'],
  abilities: ['overgrow', 'chlorophyll'],
  weight: 69,
  height: 7,
  color: '#6ca584',
};

export default {
  title: 'Components/InfoDisplay',
  component: InfoDisplay,
};

const Template: ComponentStory<typeof InfoDisplay> = (args) => <InfoDisplay {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  pokemon: bulbasaurData,
};
