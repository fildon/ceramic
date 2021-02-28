import React from "react";
import { render } from "@testing-library/react";

import { Join } from "./join";

describe("Join component", () => {
  it("renders n-1 separators for n children", () => {
    const { getAllByText } = render(
      <Join separator={<span>mock separator</span>}>
        <span>foo</span>
        <span>bar</span>
      </Join>
    );

    expect(getAllByText(/mock separator/)).toHaveLength(1);
  });
});
