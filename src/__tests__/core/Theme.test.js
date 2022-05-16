import React from "react";
import { render } from "@testing-library/react";
import Theme from "../../core/Theme";

describe("<Theme />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(
      <Theme>
        <span>test children</span>
      </Theme>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});