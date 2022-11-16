import { ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Modal as StoryModal } from 'components/generic/';

export default {
  title: 'Components/Generic/Modal',
  component: StoryModal,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const Template: ComponentStory<typeof StoryModal> = (args) => {
  const [, updateArgs] = useArgs();

  const setIsOpen = (isOpen: boolean) => {
    updateArgs({ ...args, isOpen: isOpen });
  };

  return <StoryModal {...args} setIsOpen={setIsOpen} />;
};

export const Modal = Template.bind({});

Modal.args = {
  isOpen: true,
  children: <div style={{ padding: '60px' }}>THIS IS A MODAL WITH SOME TEXT INSIDE</div>,
};
