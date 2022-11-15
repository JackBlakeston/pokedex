import { ComponentStory } from '@storybook/react';

import { StatBarWidget } from 'components/adhoc';

import { POKEMON_STATS } from 'enums';

export default {
  title: 'Components/Widgets/StatBarWidget',
  component: StatBarWidget,
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

const Template: ComponentStory<typeof StatBarWidget> = (args) => <StatBarWidget {...args} />;

export const Default = Template.bind({});

Default.args = {
  statName: POKEMON_STATS.ATTACK,
  value: 43,
  color: 'blue',
};
