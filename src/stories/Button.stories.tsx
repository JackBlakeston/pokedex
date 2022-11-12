import { ComponentStory } from '@storybook/react';

import Button from 'components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
    },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'blue',
  text: 'Button',
  size: 'medium',
  onClick: () => console.log('Clicked'),
};
