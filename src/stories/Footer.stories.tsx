import React from 'react';
import { ComponentStory } from '@storybook/react';
import Footer from "../components/layout/Footer";
import Link from "next/link";

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template: ComponentStory<typeof Footer> = () => <Footer/>;
export const Default = Template.bind({});