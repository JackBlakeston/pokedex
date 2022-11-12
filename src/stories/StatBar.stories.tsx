import { ComponentStory } from '@storybook/react';
import StatBar from 'components/StatBar/StatBar';
import { POKEMON_STATS } from 'enums';

const options = Object.values(POKEMON_STATS);

export default {
  title: 'Components/StatBar',
  component: StatBar,
  argTypes: {
    stat: {
      control: 'select',
      options: options,
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green'],
      },
    },
  },
};

const Template: ComponentStory<typeof StatBar> = (args) => <StatBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  stat: POKEMON_STATS.ATTACK,
  value: 43,
  color: 'blue',
};
