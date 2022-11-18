import { ComponentStory } from '@storybook/react';

import { GridSlide as StoryGridSlide } from '../../../components/adhoc';

const page1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const page3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const page4 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const page5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const page6 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const page7 = [901, 902, 903, 904, 905];

export default {
  title: 'Components/Adhoc/Organisms/GridSlide',
  component: StoryGridSlide,
  argTypes: {
    idList: {
      control: 'select',
      options: [page1, page2, page3, page4, page5, page6, page7],
    },
  },
};

const Template: ComponentStory<typeof StoryGridSlide> = (args) => (
  <StoryGridSlide {...args} key={JSON.stringify(args)} />
);

export const GridSlide = Template.bind({});

GridSlide.args = {
  idList: page1,
};
