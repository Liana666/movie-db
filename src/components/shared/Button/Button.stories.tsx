import { Button } from "./Button";
import { ComponentStory } from "@storybook/react";

import "./Button.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      type: "string",
      description: "Button type",
      defaultValue: "button",
      options: ["button", "submit"],
      control: {
        type: "radio",
      },
    },

    size: {
      type: "string",
      description: "Button size",
      defaultValue: "large",
      options: ["large", "small"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  text: "Click",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  text: "Click",
  size: "small",
};
