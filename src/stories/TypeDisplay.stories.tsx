import { ComponentStory } from '@storybook/react';

import TypeDisplay from 'components/TypeDisplay/TypeDisplay';

import { POKEMON_TYPES } from 'enums';

export default {
  title: 'Components/TypeDisplay',
  component: TypeDisplay,
};

const Template: ComponentStory<typeof TypeDisplay> = (args) => <TypeDisplay {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: POKEMON_TYPES.ELECTRIC,
};
