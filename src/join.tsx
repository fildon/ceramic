import React from "react";

type JoinProps = {
  separator: JSX.Element;
  children: JSX.Element[];
};

/**
 * # Join
 * Join an array of children with the provided separator.
 * @param {JSX.Element} separator The separator to be inserted between each child.
 * @param {JSX.Element[]} children The children to be joined with the provided separator.
 * @example
 * <Join separator={<br/>}>
 *   <span>foo</span>
 *   <span>bar</span>
 * </Join>
 * // becomes:
 * <>
 *   <span>foo</span>
 *   <br/>
 *   <span>bar</span>
 * </>
 */
const Join = ({ separator, children }: JoinProps): JSX.Element =>
  children.reduce((joined, child) => (
    <>
      {joined}
      {separator}
      {child}
    </>
  ));

export default Join;
