import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Navbar> = {
  title: "atom/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brandName: "Web Diary",
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Services", href: "/services" },
      { text: "Contact", href: "/contact" },
    ],
  },
};
