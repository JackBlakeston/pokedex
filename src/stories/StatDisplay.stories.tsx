import { ComponentStory } from '@storybook/react';

import StatDisplay from 'components/StatDisplay/StatDisplay';

import { bellsproutData, blastoiseData, bulbasaurData, charizardData, pikachuData } from './assets/pokemonData';

export default {
  title: 'Components/StatDisplay',
  component: StatDisplay,
};

const Template: ComponentStory<typeof StatDisplay> = (args) => <StatDisplay {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  pokemon: bulbasaurData,
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  pokemon: pikachuData,
};

export const Charizard = Template.bind({});

Charizard.args = {
  pokemon: charizardData,
};

export const Blastoise = Template.bind({});

Blastoise.args = {
  pokemon: blastoiseData,
};

export const Bellsprout = Template.bind({});

Bellsprout.args = {
  pokemon: bellsproutData,
};
