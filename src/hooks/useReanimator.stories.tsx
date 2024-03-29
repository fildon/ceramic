import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { useReanimator } from "./useReanimator";
import "./useReanimator.css";

export default {
  title: "Hooks/useReanimator",
} as Meta;

const Template: Story = () => {
  const [firstCount, setFirstCount] = React.useState(0);
  const { ref: firstAnimator } = useReanimator([firstCount]);
  const [secondCount, setSecondCount] = React.useState(0);
  const { ref: secondAnimator } = useReanimator([secondCount]);
  return (
    <>
      <p>
        The <em>useReanimator</em> hook provides a way to restart CSS
        animations. It takes a single argument, an array of values to
        synchronize with. It returns an object containing an ref which you
        should bind to your own element. When any value in the input array
        changes, the hook will trigger a CSS animation reset on the element
        bound to the ref.
      </p>
      <p>
        This counter demo will reanimate the count each time it changes. Click
        on <code>Show code</code> in the Docs tab to see how this example works.
      </p>
      <button onClick={() => setFirstCount(firstCount - 1)}>-</button>
      <span ref={firstAnimator} className="animate-drop">
        {firstCount}
      </span>
      <button onClick={() => setFirstCount(firstCount + 1)}>+</button>
      <br />
      <button onClick={() => setSecondCount(secondCount - 1)}>-</button>
      <span ref={secondAnimator} className="animate-drop">
        {secondCount}
      </span>
      <button onClick={() => setSecondCount(secondCount + 1)}>+</button>
    </>
  );
};

export const Default = Template.bind({});
