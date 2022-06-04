import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title',
  },
} as ComponentMeta<typeof Main>;

export const Deafult: ComponentStory<typeof Main> = args => <Main {...args} />;
