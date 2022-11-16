import { ComponentStory } from '@storybook/react';

import { Button } from 'components/generic/';

export default {
  title: 'Components/Generic/Button',
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
  color: '#F95587',
  text: 'Button',
  size: 'medium',
  onClick: () => console.log('Clicked'),
};
