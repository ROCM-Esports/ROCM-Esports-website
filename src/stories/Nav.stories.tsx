import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Navbar } from "../components/nav"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Navbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Navbar> = () => <Navbar />
