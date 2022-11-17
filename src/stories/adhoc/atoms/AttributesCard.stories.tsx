import { ComponentStory } from '@storybook/react';
import { FC } from 'react';

import { AttributesCard as StoryAttributesCard } from '../../../components/adhoc';

import { bulbasaurData } from '../../../stories/assets/pokemonData';

export default {
  title: 'Components/Adhoc/Atoms/AttributesCard',
  component: StoryAttributesCard,
  argTypes: {
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 0.1,
      },
    },
    weight: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 0.1,
      },
    },
  },
  decorators: [
    (Story: FC) => (
      <div style={{ backgroundColor: 'white', padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof StoryAttributesCard> = (args) => (
  <StoryAttributesCard {...args} weight={args.weight * 10} height={args.height * 10} />
);

export const AttributesCard = Template.bind({});

AttributesCard.args = {
  ability: bulbasaurData.abilities[0],
  height: bulbasaurData.height / 10,
  weight: bulbasaurData.weight / 10,
};
