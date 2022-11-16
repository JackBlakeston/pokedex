import { ComponentStory } from '@storybook/react';

import { PokemonImage } from 'components/adhoc';
import { POKEMON_COLORS } from 'constants/pokemonColours';
import { bellsproutData, blastoiseData, bulbasaurData, charizardData, pikachuData } from '../../assets/pokemonData';

export default {
  title: 'Components/Atoms/PokemonImage',
  component: PokemonImage,
  argTypes: {
    color: {
      control: 'select',
      options: POKEMON_COLORS,
    },
  },
};

const Template: ComponentStory<typeof PokemonImage> = (args) => <PokemonImage {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  size: 'small',
  color: bulbasaurData.color,
  imgUrl: bulbasaurData.imgUrl,
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  size: 'small',
  color: pikachuData.color,
  imgUrl: pikachuData.imgUrl,
};

export const Charizard = Template.bind({});

Charizard.args = {
  size: 'small',
  color: charizardData.color,
  imgUrl: charizardData.imgUrl,
};

export const Blastoise = Template.bind({});

Blastoise.args = {
  size: 'small',
  color: blastoiseData.color,
  imgUrl: blastoiseData.imgUrl,
};

export const Bellsprout = Template.bind({});

Bellsprout.args = {
  size: 'small',
  color: bellsproutData.color,
  imgUrl: bellsproutData.imgUrl,
};
