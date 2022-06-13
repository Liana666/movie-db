import { Input } from "./Input";
import { ComponentStory } from "@storybook/react";

import "./Input.css";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    type: {
      type: "string",
      description: "Input type",
      defaultValue: "text",
      options: ["text", "number", "password"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template: ComponentStory<typeof Input> = (arg) => <Input {...arg} />;

export const Search = Template.bind({});
Search.args = {
  className: "input",
  placeholder: "Search",
  type: "text",
  name: "search",
};

export const FilterYear = Template.bind({});
FilterYear.args = {
  className: "input",
  placeholder: "Year",
  type: "text",
  name: "year",
};

export const Email = Template.bind({});
Email.args = {
  className: "input--login",
  placeholder: "Email",
  type: "text",
  name: "email",
};

export const Password = Template.bind({});
Password.args = {
  className: "input--login",
  placeholder: "Password",
  type: "password",
  name: "password",
};
