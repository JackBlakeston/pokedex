import { ComponentStory } from '@storybook/react';

import PokemonCard from 'components/PokemonCard/PokemonCard';

import { bulbasaurData } from './assets/pokemonData';

export default {
  title: 'Components/PokemonCard',
  component: PokemonCard,
};

const Template: ComponentStory<typeof PokemonCard> = (args) => <PokemonCard {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  pokemon: bulbasaurData,
};
