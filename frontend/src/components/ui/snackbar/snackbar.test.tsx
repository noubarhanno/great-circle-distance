import React from "react";
import { render } from "@testing-library/react";
import Snackbar from "./snackbar";

describe("Snackbar test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Snackbar open={true}>Test</Snackbar>);
    expect(container).toMatchSnapshot();
  });

  it("should render the snackbar with an alert element", () => {
    const { getByTestId } = render(<Snackbar open={true}>Test</Snackbar>);
    expect(getByTestId("snackbar-alert")).toBeInTheDocument();
    expect(getByTestId("snackbar-alert")).toHaveTextContent("Test");
  });
});
