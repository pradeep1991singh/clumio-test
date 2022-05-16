import React from "react";
import { render } from "@testing-library/react";
import StarRating from '../../core/StarRating';

const defaultProps = {
  onChange: jest.fn(),
};

describe("<StarRating />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<StarRating {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});