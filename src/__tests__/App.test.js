import { render, screen } from "@testing-library/react";
import App from "../App";

xtest("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Discover/i);
  expect(linkElement).toBeInTheDocument();
});
