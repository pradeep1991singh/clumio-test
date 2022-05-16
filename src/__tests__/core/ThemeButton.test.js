import React from "react";
import { render } from "@testing-library/react";
import ThemeButton from "../../core/ThemeButton";

describe("<ThemeButton />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<ThemeButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
