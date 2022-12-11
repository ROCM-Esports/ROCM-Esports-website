// create a story for the button component
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Button } from "../components/Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    button_type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "navigation", "cta"],
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
} as ComponentMeta<typeof Button>
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  button_type: "primary",
  children: "Primary Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  button_type: "secondary",
  children: "Secondary Button",
}

export const Navigation = Template.bind({})
Navigation.args = {
  button_type: "navigation",
  children: (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20" rx="8"></rect>
      <rect y="30" width="100" height="20" rx="8"></rect>
      <rect y="60" width="100" height="20" rx="8"></rect>
    </svg>
  ),
}
export const EVENT = Template.bind({})
EVENT.args = {
  button_type: "primary",
  children: "event",
  onClick: () => {
    alert("event")
  }

}

export const CTA = Template.bind({})
CTA.args = {
  button_type: "cta",
  children: "CTA Button",
}
