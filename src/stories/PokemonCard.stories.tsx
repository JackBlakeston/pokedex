import { ComponentStory } from '@storybook/react';

import { PokemonCard } from 'components/adhoc';

export default {
  title: 'Components/PokemonCard',
  component: PokemonCard,
  argTypes: {
    pokemonId: {
      control: {
        type: 'range',
        min: 1,
        max: 905,
        step: 1,
      },
    },
  },
};

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} key={JSON.stringify(args)} />
);

export const Card = Template.bind({});

Card.args = {
  pokemonId: 1,
};
