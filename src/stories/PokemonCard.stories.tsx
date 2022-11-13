import { ComponentStory } from '@storybook/react';

import PokemonCard from 'components/PokemonCard/PokemonCard';

import { bulbasaurData, charizardData, pikachuData } from './assets/pokemonData';

export default {
  title: 'Components/PokemonCard',
  component: PokemonCard,
};

const Template: ComponentStory<typeof PokemonCard> = (args) => <PokemonCard {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  pokemon: bulbasaurData,
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  pokemon: pikachuData,
};

export const Charizard = Template.bind({});

Charizard.args = {
  pokemon: charizardData,
};
