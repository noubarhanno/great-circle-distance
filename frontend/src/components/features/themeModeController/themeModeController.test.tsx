import React from "react";
import { render } from "@testing-library/react";
import ThemeModeController from "./themeModeController";
import ContextWrapper from "context/config.context";
import * as Context from "context/config.context";

describe("ThemeModeController test suite", () => {
  it("should match snopshot with light theme", () => {
    const { container } = render(
      <ContextWrapper defaultTheme="light">
        <ThemeModeController />
      </ContextWrapper>
    );
    expect(container).toMatchSnapshot();
  });

  it("should match snopshot with dark theme", () => {
    const { container } = render(
      <ContextWrapper defaultTheme="dark">
        <ThemeModeController />
      </ContextWrapper>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the dark mode icon initially", () => {
    const { getByTestId } = render(
      <ContextWrapper defaultTheme="light">
        <ThemeModeController />
      </ContextWrapper>
    );
    expect(getByTestId("dark-mode-icon")).toBeInTheDocument();
  });
});
