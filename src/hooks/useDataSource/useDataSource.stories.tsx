import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { useDataSource } from "./useDataSource";

const demoDataSource = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("you got the data!"), 100 + Math.random() * 2000);
  });

const DemoUseDataSource: React.VFC = () => {
  const dataResult = useDataSource(() => demoDataSource());

  if (dataResult.error) {
    return <span>Sorry there was an error.</span>;
  }

  if (dataResult.loading) {
    return <span>LOADING...</span>;
  }

  return <span>The data is: {dataResult.data}</span>;
};

export default {
  title: "Hooks/useDataSource",
  component: DemoUseDataSource,
} as Meta;

const Template: Story = () => <DemoUseDataSource />;

export const Default = Template.bind({});
