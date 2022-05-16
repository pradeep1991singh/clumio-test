import React from "react";
import { render } from "@testing-library/react";
import SkeletonList from "../../core/SkeletonList";

const defaultProps = {
  label: "label",
  name: "name",
  options: [
    { id: 1, name: "option1" },
    { id: 2, name: "option2" },
  ],
  onChange: jest.fn(),
};

describe("<SkeletonList />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<SkeletonList {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});