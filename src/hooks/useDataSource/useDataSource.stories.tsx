import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { useDataSource } from "./useDataSource";

const dataSourceThatSucceeds = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("you got the data!"), 1000);
  });

const dataSourceThatFails = () =>
  new Promise<string>((_resolve, reject) => {
    setTimeout(() => reject("Your internet is down"), 1000);
  });

interface DemoUseDataSourceProps {
  dataSource: () => Promise<string>;
}

const DemoUseDataSource = ({ dataSource }: DemoUseDataSourceProps) => {
  const dataResult = useDataSource(() => dataSource());

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

const Template: Story<DemoUseDataSourceProps> = (args) => (
  <DemoUseDataSource {...args} />
);

export const DataSourceSuccess = Template.bind({});
DataSourceSuccess.args = {
  dataSource: dataSourceThatSucceeds,
};

export const DataSourceFailure = Template.bind({});
DataSourceFailure.args = {
  dataSource: dataSourceThatFails,
};
