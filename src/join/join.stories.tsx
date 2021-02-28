import React from "react";
import { Story, Meta } from "@storybook/react";

import { Join, JoinProps } from ".";

export default {
  title: "Example/Join",
  component: Join,
} as Meta;

const Template: Story<JoinProps> = (args) => <Join {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  children: [<span>foo</span>, <span>bar</span>],
  separator: <br />,
};

export const EmptyExample = Template.bind({});
EmptyExample.args = {
  children: [],
  separator: <br />,
};
