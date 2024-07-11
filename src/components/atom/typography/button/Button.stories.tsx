import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atom/Button",
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    isLoading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    variantType: "filled",
    children: "Primary Button",
    onClick: action("Primary button clicked"),
    type: "button",
    isLoading: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    variantType: "filled",
    children: "Secondary Button",
    onClick: action("Secondary button clicked"),
    type: "button",
    isLoading: false,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    variantType: "outline",
    children: "Tertiary Button",
    onClick: action("Tertiary button clicked"),
    type: "button",
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    variantType: "filled",
    children: "Loading Button",
    onClick: action("Loading button clicked"),
    type: "button",
    isLoading: true,
  },
};

export const CustomClasses: Story = {
  args: {
    variant: "primary",
    variantType: "filled",
    children: "Custom Classes Button",
    onClick: action("Custom classes button clicked"),
    type: "button",
    isLoading: false,
    className: "",
  },
};

export const SubmitButton: Story = {
  args: {
    variant: "primary",
    variantType: "filled",
    children: "Submit Form",
    onClick: () => {
      action("Alert button clicked")();
      alert("Button clicked!");
    },
    type: "submit",
    isLoading: false,
  },
};
