import * as React from "react";
import { Story, Meta } from "@storybook/react";

import { Join, JoinProps } from "./join";

export default {
  title: "Components/Join",
  component: Join,
} as Meta;

const Template: Story<JoinProps> = (args) => <Join {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: ["foo", "bar", "buzz"].map((content) => (
    <span key={content}>{content}</span>
  )),
  separator: "🌟",
};

export const ThreeChildrenWithJSXSeparator = Template.bind({});
ThreeChildrenWithJSXSeparator.args = {
  children: ["foo", "bar", "buzz"].map((content) => (
    <span key={content}>{content}</span>
  )),
  separator: <hr />,
};

const NullComponent = () => null;

export const NullChildren = Template.bind({});
NullChildren.args = {
  children: [
    <NullComponent key={0} />,
    <NullComponent key={1} />,
    <NullComponent key={2} />,
  ],
  separator: <hr />,
};
