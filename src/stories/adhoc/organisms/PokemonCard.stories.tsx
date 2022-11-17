import { FC } from 'react';
import { ComponentStory } from '@storybook/react';

import { PokemonCard as StoryPokemonCard } from '../../../components/adhoc';

export default {
  title: 'Components/Adhoc/Organisms/PokemonCard',
  component: StoryPokemonCard,
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
  decorators: [
    (Story: FC) => (
      <div style={{ height: '250px', width: '350px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof StoryPokemonCard> = (args) => (
  <StoryPokemonCard {...args} key={JSON.stringify(args)} />
);

export const PokemonCard = Template.bind({});

PokemonCard.args = {
  pokemonId: 1,
};
