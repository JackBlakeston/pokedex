import { ComponentStory } from '@storybook/react';

import { StatBar as StoryStatBar } from '../../../components/adhoc';

import { pikachuData } from '../../assets/pokemonData';

import { POKEMON_STATS } from '../../../enums';

export default {
  title: 'Components/Adhoc/Atoms/StatBar',
  component: StoryStatBar,
  argTypes: {
    stat: {
      control: 'select',
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 150,
        step: 1,
      },
    },
  },
};

const Template: ComponentStory<typeof StoryStatBar> = (args) => <StoryStatBar {...args} />;

export const StatBar = Template.bind({});

StatBar.args = {
  name: POKEMON_STATS.ATTACK,
  value: pikachuData.stats[1].value,
  color: pikachuData.color,
};
