import React from "react";
import { render } from "@testing-library/react";
import ThemeModeController from "./themeModeController";

describe("ThemeModeController test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<ThemeModeController />);
    expect(container).toMatchSnapshot();
  });
});
