import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { DataResult, useDataSource } from "./useDataSource";

const dataSourceThatSucceeds = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("you got the data!"), 1000);
  });

const dataSourceThatFails = () =>
  new Promise<string>((_resolve, reject) => {
    setTimeout(() => reject("Your internet is down"), 1000);
  });

interface DisplayDataResultProps {
  dataResult: DataResult<string>;
}
const DisplayDataResult = ({ dataResult }: DisplayDataResultProps) => {
  switch (dataResult.state) {
    case "error":
      return <p>Sorry there was an error.</p>;
    case "loading":
      return <p>LOADING...</p>;
    case "success":
      return <p>The data is: {dataResult.data}</p>;
  }
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
        This component is simply a harness for demonstrating the useDataSource
        hook. Below a data display is mounted with the hook, which after about
        one second will <em>{message}</em>.
      </p>
      <p>
        The hook returns an object containing:
        <ul>
          <li>
            State: a state enum indicating one of Error, Loading, Success.
          </li>
          <li>Data: if and only if the state is successful.</li>
          <li>
            Refresh: a callback which can be invoked to refetch the data from
            the source.
          </li>
        </ul>
      </p>
      <DisplayDataResult dataResult={dataResult} />
      <button onClick={dataResult.refresh}>Click me to force a refetch.</button>
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
