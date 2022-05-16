import React from "react";
import { render } from "@testing-library/react";
import Card from "../../core/Card";
import { movieMock } from "../../__mocks__/movies.mock";

describe("<Card />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Card {...movieMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
