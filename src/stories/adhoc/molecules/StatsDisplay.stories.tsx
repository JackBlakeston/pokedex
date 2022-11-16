import { ComponentStory } from '@storybook/react';

import { StatsDisplay } from 'components/adhoc';

import {
  bellsproutData,
  blastoiseData,
  bulbasaurData,
  charizardData,
  pikachuData,
} from 'stories/assets/pokemonData';

export default {
  title: 'Components/Adhoc/Molecules/StatsDisplay',
  component: StatsDisplay,
};

const Template: ComponentStory<typeof StatsDisplay> = (args) => <StatsDisplay {...args} />;

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
