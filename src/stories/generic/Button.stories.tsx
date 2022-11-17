import { ComponentStory } from '@storybook/react';

import { Button as StoryButton } from '../../components/generic/';

export default {
  title: 'Components/Generic/Button',
  component: StoryButton,
  argTypes: {
    size: {
      control: 'select',
    },
  },
};

const Template: ComponentStory<typeof StoryButton> = (args) => <StoryButton {...args} />;

export const Button = Template.bind({});

Button.args = {
  color: '#F95587',
  text: 'Button',
  size: 'medium',
  onClick: () => console.log('Clicked'),
};
