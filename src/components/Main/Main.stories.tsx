import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>;

export const Deafult: ComponentStory<typeof Main> = () => <Main />;
