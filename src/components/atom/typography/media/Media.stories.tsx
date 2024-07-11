import type { Meta, StoryObj } from "@storybook/react";
import Media from "./Media";

const meta: Meta<typeof Media> = {
  title: "Atom/Media",
  component: Media,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["image", "video"],
    },
    src: { control: "text" },
    alt: { control: "text" },
    containerClasses: { control: "text" },
    mediaClasses: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Media>;

export const Image: Story = {
  args: {
    type: "image",
    src: "http://localhost:5173/src/assets/coding.avif",
    alt: "Coding",
    containerClasses: "",
    mediaClasses: "rounded object-cover",
  },
};

export const Video: Story = {
  args: {
    type: "video",
    src: "http://localhost:5173/src/assets/video.mp4",
    alt: "Coding Video",
    containerClasses: "",
    mediaClasses: "rounded object-cover",
    showControls: false,
  },
  argTypes: {
    showControls: {
      control: { type: "boolean" },
    },
  },
};

export const CustomClasses: Story = {
  args: {
    type: "image",
    src: "",
    alt: "Coding with Custom Classes",
    containerClasses: "border-4 border-primary p-2",
    mediaClasses: "rounded-full w-64 h-64 object-cover",
  },
};
