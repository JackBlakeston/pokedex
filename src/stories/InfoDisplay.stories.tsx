import { ComponentStory } from '@storybook/react';

import InfoDisplay from 'components/InfoDisplay/InfoDisplay';

import { bulbasaurData } from './assets/pokemonData';

export default {
  title: 'Components/InfoDisplay',
  component: InfoDisplay,
};

const Template: ComponentStory<typeof InfoDisplay> = (args) => <InfoDisplay {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  pokemon: bulbasaurData,
};
