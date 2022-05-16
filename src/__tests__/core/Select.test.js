import React from "react";
import { render } from "@testing-library/react";
import Select from "../../core/Select";

const defaultProps = {
  label: "label",
  name: "name",
  options: [
    { id: 1, name: "option1" },
    { id: 2, name: "option2" },
  ],
  onChange: jest.fn(),
};

describe("<Select />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Select {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
