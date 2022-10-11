import React from "react";
import { render } from "@testing-library/react";
import Snackbar from "./snackbar";

describe("Snackbar test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Snackbar open={true}>Test</Snackbar>);
    expect(container).toMatchSnapshot();
  });
});
