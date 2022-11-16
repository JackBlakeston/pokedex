import { ComponentStory } from '@storybook/react';

import { GridCarousel as StoryGridCarousel } from 'components/adhoc';

export default {
  title: 'Components/Adhoc/Organisms/GridCarousel',
  component: StoryGridCarousel,
};

const Template: ComponentStory<typeof StoryGridCarousel> = () => <StoryGridCarousel />;

export const GridCarousel = Template.bind({});
