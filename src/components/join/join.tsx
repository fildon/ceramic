import React from "react";

export interface JoinProps {
  /**
   * The separator to be inserted between each child.
   */
  separator: React.ReactNode;
  /**
   * The children to be joined with the provided separator.
   */
  children: React.ReactNode[];
}

/**
 * Join an array of child components with the provided separator.
 *
 * _Warning_: The Join component does not check whether each child _actually_ renders anything.
 * For example if a child renders to 'null' it will not be included in the final HTML that
 * React emits, nonetheless the Join component will still have included a separator as though
 * that child were present. This is rarely desirable, but we leave it to the consuming code
 * to ensure that the children passed are exactly those that are expected to render.
 */
export const Join: React.VFC<JoinProps> = ({ separator, children }) => (
  <>
    {children.reduce((joined, child) => (
      <>
        {joined}
        {separator}
        {child}
      </>
    ))}
  </>
);
