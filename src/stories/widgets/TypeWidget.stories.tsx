import { ComponentStory } from '@storybook/react';

import { TypeWidget } from 'components/adhoc';

import { POKEMON_TYPES } from 'enums';

export default {
  title: 'Components/Widgets/TypeWidget',
  component: TypeWidget,
};

const Template: ComponentStory<typeof TypeWidget> = (args) => <TypeWidget {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: POKEMON_TYPES.ELECTRIC,
};
