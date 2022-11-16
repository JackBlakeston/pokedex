import { ComponentStory } from '@storybook/react';

import { TypesDisplay } from 'components/adhoc';

import { bellsproutData, blastoiseData, bulbasaurData, charizardData, pikachuData } from '../assets/pokemonData';

export default {
  title: 'Components/Displays/TypesDisplay',
  component: TypesDisplay,
};

const Template: ComponentStory<typeof TypesDisplay> = (args) => <TypesDisplay {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  types: bulbasaurData['types'],
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  types: pikachuData['types'],
};

export const Charizard = Template.bind({});

Charizard.args = {
  types: charizardData['types'],
};

export const Blastoise = Template.bind({});

Blastoise.args = {
  types: blastoiseData['types'],
};

export const Bellsprout = Template.bind({});

Bellsprout.args = {
  types: bellsproutData['types'],
};
