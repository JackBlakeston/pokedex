import { ComponentStory } from '@storybook/react';

import { TypeBadge as StoryTypeBadge } from '../../../components/adhoc';

import { POKEMON_TYPES } from '../../../enums';

export default {
  title: 'Components/Adhoc/Atoms/TypeBadge',
  component: StoryTypeBadge,
};

const Template: ComponentStory<typeof StoryTypeBadge> = (args) => <StoryTypeBadge {...args} />;

export const TypeBadge = Template.bind({});

TypeBadge.args = {
  type: POKEMON_TYPES.ELECTRIC,
};
