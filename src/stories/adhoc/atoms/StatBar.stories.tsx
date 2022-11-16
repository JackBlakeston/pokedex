import { ComponentStory } from '@storybook/react';

import { StatBar as StoryStatBar } from 'components/adhoc';

import { POKEMON_STATS } from 'enums';

export default {
  title: 'Components/Atoms/StatBar',
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
  statName: POKEMON_STATS.ATTACK,
  value: 43,
  color: 'blue',
};
