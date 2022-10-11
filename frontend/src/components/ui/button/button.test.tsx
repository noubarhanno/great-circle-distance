import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("Button test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
