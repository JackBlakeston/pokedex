import { ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { PokemonDetailsModal } from 'components/adhoc';

import { bellsproutData, blastoiseData, bulbasaurData, charizardData, pikachuData } from './assets/pokemonData';

export default {
  title: 'Components/PokemonDetailsModal',
  component: PokemonDetailsModal,
};

const Template: ComponentStory<typeof PokemonDetailsModal> = (args) => {
  const [, updateArgs] = useArgs();

  const setIsOpen = (isOpen: boolean) => {
    updateArgs({ ...args, isOpen: isOpen });
  };

  return <PokemonDetailsModal {...args} setIsOpen={setIsOpen} />;
};

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
  isOpen: true,
  pokemon: bulbasaurData,
};

export const Pikachu = Template.bind({});

Pikachu.args = {
  isOpen: true,
  pokemon: pikachuData,
};

export const Charizard = Template.bind({});

Charizard.args = {
  isOpen: true,
  pokemon: charizardData,
};

export const Blastoise = Template.bind({});

Blastoise.args = {
  isOpen: true,
  pokemon: blastoiseData,
};

export const Bellsprout = Template.bind({});

Bellsprout.args = {
  isOpen: true,
  pokemon: bellsproutData,
};
