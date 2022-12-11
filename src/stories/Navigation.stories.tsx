// story for Navigation
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { SessionProvider, useSession } from "next-auth/react"
import Link from "next/link"
import  Navigation from "../components/navigation/Navigation"
import Image from "next/image"

export default {
  title: "Layout/Navigation",
  component: Navigation,
  argTypes: {
  },
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <SessionProvider>
    <Navigation ></Navigation>
  </SessionProvider>
)

export const Default = Template.bind({})
Default.args = {
  backgroundColor: "#000000",
}
