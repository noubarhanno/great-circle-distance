import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("Button test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it("should display spinner instead when isLoading passed", async () => {
    const { findByTestId } = render(<Button isLoading />);
    expect(await findByTestId("button-spinner")).toBeInTheDocument();
  });

  it("should render children as element", () => {
    const { getByTestId } = render(
      <Button>
        <p data-testid="button-child">button</p>
      </Button>
    );
    expect(getByTestId("button-child")).toBeInTheDocument();
  });
});
