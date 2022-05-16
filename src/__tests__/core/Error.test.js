import React from "react";
import { render } from "@testing-library/react";
import Error from "../../core/Error";

describe("<Error />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Error message="errored" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
