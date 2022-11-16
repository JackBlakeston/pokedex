import { ComponentStory } from '@storybook/react';

import { StatBar } from 'components/adhoc';

import { POKEMON_STATS } from 'enums';

export default {
  title: 'Components/Atoms/StatBar',
  component: StatBar,
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

const Template: ComponentStory<typeof StatBar> = (args) => <StatBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  statName: POKEMON_STATS.ATTACK,
  value: 43,
  color: 'blue',
};
