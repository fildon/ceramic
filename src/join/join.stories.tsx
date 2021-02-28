import React from "react";
import { Story, Meta } from "@storybook/react";

import { Join, JoinProps } from "./join";

export default {
  title: "Example/Join",
  component: Join,
} as Meta;

const Template: Story<JoinProps> = (args) => <Join {...args} />;

export const TwoChildren = Template.bind({});
TwoChildren.args = {
  children: [<span>foo</span>, <span>bar</span>],
  separator: <br />,
};

export const ThreeChildren = Template.bind({});
ThreeChildren.args = {
  children: [<span>foo</span>, <span>bar</span>, <span>buzz</span>],
  separator: <br />,
};
