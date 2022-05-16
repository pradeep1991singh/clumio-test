import React from "react";
import { render } from "@testing-library/react";
import Grid from "../../core/Grid";
import { moviesMock } from "../../__mocks__/movies.mock";

describe("<Grid />", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Grid items={moviesMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
