import { ComponentStory } from '@storybook/react';

import { Button as StoryButton } from '../../components/generic/';

import { SIZES } from '../../enums';

export default {
  title: 'Components/Generic/Button',
  component: StoryButton,
};

const Template: ComponentStory<typeof StoryButton> = (args) => <StoryButton {...args} />;

export const Button = Template.bind({});

Button.args = {
  color: '#F95587',
  text: 'Button',
  size: SIZES.MEDIUM,
  onClick: () => console.log('Clicked'),
};
