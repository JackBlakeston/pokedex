import { ComponentStory } from '@storybook/react';

import { GridCarousel } from 'components/adhoc';

export default {
  title: 'Components/GridCarousel',
  component: GridCarousel,
};

const Template: ComponentStory<typeof GridCarousel> = () => <GridCarousel />;

export const Carousel = Template.bind({});
