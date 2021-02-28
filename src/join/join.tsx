import React from "react";

export interface JoinProps {
  /**
   * The separator to be inserted between each child.
   */
  separator: JSX.Element;
  /**
   * The children to be joined with the provided separator.
   */
  children: JSX.Element[];
}

/**
 * Join an array of child components with the provided separator.
 */
export const Join: React.VFC<JoinProps> = ({ separator, children }) => {
  if (children.length === 0) {
    return <></>;
  }
  return children.reduce((joined, child) => (
    <>
      {joined}
      {separator}
      {child}
    </>
  ));
};
