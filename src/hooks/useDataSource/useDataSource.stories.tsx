import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { DataState, useDataSource } from "./useDataSource";

const dataSourceThatSucceeds = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("you got the data!"), 1000);
  });

const dataSourceThatFails = () =>
  new Promise<string>((_resolve, reject) => {
    setTimeout(() => reject("Your internet is down"), 1000);
  });

interface DisplayDataResultProps {
  dataResult: DataState<string>;
}
const DisplayDataResult = ({ dataResult }: DisplayDataResultProps) => {
  if (dataResult.error) {
    return <span>Sorry there was an error.</span>;
  }

  if (dataResult.loading) {
    return <span>LOADING...</span>;
  }

  return <span>The data is: {dataResult.data}</span>;
};

interface DemoUseDataSourceProps {
  dataSource: () => Promise<string>;
  message: string;
}
const DemoUseDataSource = ({ dataSource, message }: DemoUseDataSourceProps) => {
  const dataResult = useDataSource(() => dataSource());

  return (
    <>
      <p>
        This component is a simply a harness for demonstrating the useDataSource
        hook. Below is a data display is mounted with the hook, which after
        about one second will <em>{message}</em>.
      </p>
      <DisplayDataResult dataResult={dataResult} />
    </>
  );
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
  message: "succeed",
};

export const DataSourceFailure = Template.bind({});
DataSourceFailure.args = {
  dataSource: dataSourceThatFails,
  message: "fail",
};
