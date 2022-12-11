import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react"

import SocialWheel from "../components/footer/socialWheel";
import Link from "next/link";

export default {
  title: 'Components/SocialWheel',
  component: SocialWheel,
  argTypes: {
    socials: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof SocialWheel>;


const socials = [
  {
    name: "instagram",
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    name: "discord",
    icon: "/icons/discord.svg",
    link: "https://discord.gg/",
  },
  {
    name: "twitter",
    icon: "/icons/twitter.svg",
    link: "https://twitter.com/",
  },
  {
    name: "twitch",
    icon: "/icons/twitch.svg",
    link: "https://www.twitch.tv/",
  },

  {
    name: "youtube",
    icon: "/icons/youtube.svg",
    link: "https://www.youtube.com/",
  },
  {
    name: "linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/",
  },
  {
    name: "tiktok",
    icon: "/icons/tiktok.svg",
    link: "https://www.tiktok.com/",
  },
];

const Template: ComponentStory<typeof SocialWheel> = () => <SocialWheel socials={socials}/>;
export const Default = Template.bind({});