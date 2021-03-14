import * as React from "react";
import { Story, Meta } from "@storybook/react";

import { DemoUseDataSource } from "./useDataSource";

export default {
  title: "Hooks/useDataSource",
  component: DemoUseDataSource,
} as Meta;

const Template: Story = () => <DemoUseDataSource />;

export const Default = Template.bind({});
