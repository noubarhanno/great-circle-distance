import React from "react";
import { render } from "@testing-library/react";
import Error from "./error";

describe("Error test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});
