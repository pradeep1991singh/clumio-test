import React from "react";
import { render } from "@testing-library/react";
import Loader from "../../core/Loader";

describe("<Loader />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
