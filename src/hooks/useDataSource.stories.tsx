import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { DataResult, useDataSource } from "./useDataSource";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

const dataSourceThatSucceeds = () =>
  wait(1000).then(() => Promise.resolve("you got the data!"));
const dataSourceThatFails = () =>
  wait(1000).then(() => Promise.reject("Your internet is down"));

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
export default {
  title: "Hooks/useDataSource",
} as Meta;

const Template: Story<DemoUseDataSourceProps> = (args) => {
  const DemoUseDataSource = ({
    dataSource,
    message,
  }: DemoUseDataSourceProps) => {
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
        <p>
          Click on <code>Show code</code> in the Docs tab to see how this
          example works.
        </p>
        <DisplayDataResult dataResult={dataResult} />
        <button onClick={dataResult.refresh}>
          Click me to force a refetch.
        </button>
      </>
    );
  };

  return <DemoUseDataSource {...args} />;
};

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
