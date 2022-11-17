import { ComponentStory } from '@storybook/react';

import { PokemonImage as StoryPokemonImage } from '../../../components/adhoc';

import {
  bellsproutData,
  blastoiseData,
  bulbasaurData,
  charizardData,
  pikachuData,
} from '../../assets/pokemonData';
import { POKEMON_COLORS } from '../../../assets/data/pokemonColours';

import { SIZES } from '../../../enums';

export default {
  title: 'Components/Adhoc/Atoms/PokemonImage',
  component: StoryPokemonImage,
  argTypes: {
    color: {
      control: 'select',
      options: POKEMON_COLORS,
    },
  },
};

const Template: ComponentStory<typeof StoryPokemonImage> = ({ ...args }) => <StoryPokemonImage {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  size: SIZES.LARGE,
  color: bulbasaurData.color,
  imgUrl: bulbasaurData.imgUrl,
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  size: SIZES.LARGE,
  color: pikachuData.color,
  imgUrl: pikachuData.imgUrl,
};

export const Charizard = Template.bind({});

Charizard.args = {
  size: SIZES.LARGE,
  color: charizardData.color,
  imgUrl: charizardData.imgUrl,
};

export const Blastoise = Template.bind({});

Blastoise.args = {
  size: SIZES.LARGE,
  color: blastoiseData.color,
  imgUrl: blastoiseData.imgUrl,
};

export const Bellsprout = Template.bind({});

Bellsprout.args = {
  size: SIZES.LARGE,
  color: bellsproutData.color,
  imgUrl: bellsproutData.imgUrl,
};
