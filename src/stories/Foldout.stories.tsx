// create a story for the foldout component
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Foldout } from "../components/foldout";
import { useSpring, animated } from "react-spring"

export default {
  title: 'Components/Foldout',
  component: Foldout,
};

const Template: ComponentStory<typeof Foldout> = (args) => <Foldout {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Foldout Content",
};
