import { ComponentStory } from '@storybook/react';

import PokemonImage from 'components/PokemonImage/PokemonImage';

import { bellsproutData, blastoiseData, bulbasaurData, charizardData, pikachuData } from './assets/pokemonData';

export default {
  title: 'Components/PokemonImage',
  component: PokemonImage,
};

const Template: ComponentStory<typeof PokemonImage> = (args) => <PokemonImage {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  size: 'small',
  pokemon: bulbasaurData,
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  size: 'small',
  pokemon: pikachuData,
};

export const Charizard = Template.bind({});

Charizard.args = {
  size: 'small',
  pokemon: charizardData,
};

export const Blastoise = Template.bind({});

Blastoise.args = {
  size: 'small',
  pokemon: blastoiseData,
};

export const Bellsprout = Template.bind({});

Bellsprout.args = {
  size: 'small',
  pokemon: bellsproutData,
};
