import { ComponentStory } from '@storybook/react';

import { TypeBadge } from 'components/adhoc';

import { POKEMON_TYPES } from 'enums';

export default {
  title: 'Components/Atoms/TypeBadge',
  component: TypeBadge,
};

const Template: ComponentStory<typeof TypeBadge> = (args) => <TypeBadge {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: POKEMON_TYPES.ELECTRIC,
};
