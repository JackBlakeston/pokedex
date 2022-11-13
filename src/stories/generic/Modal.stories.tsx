import { ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import Modal from 'components/Modal/Modal';

export default {
  title: 'Components/Generic/Modal',
  component: Modal,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const Template: ComponentStory<typeof Modal> = (args) => {
  const [, updateArgs] = useArgs();

  const setIsOpen = (isOpen: boolean) => {
    updateArgs({ ...args, isOpen: isOpen });
  };

  return <Modal {...args} setIsOpen={setIsOpen} />;
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  children: <div>THIS IS A MODAL WITH SOME TEXT INSIDE</div>,
};
