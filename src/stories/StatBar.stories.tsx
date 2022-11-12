import { ComponentStory } from '@storybook/react';
import StatBar from 'components/StatBar/StatBar';

export default {
  title: 'Components/StatBar',
  component: StatBar,
};

const Template: ComponentStory<typeof StatBar> = (args) => <StatBar {...args} />;

export const ATK = Template.bind({});

ATK.args = {
  stat: { name: 'ATK', value: 43 },
  color: 'blue',
};

export const HP = Template.bind({});

HP.args = {
  stat: { name: 'HP', value: 20 },
  color: 'red',
};
