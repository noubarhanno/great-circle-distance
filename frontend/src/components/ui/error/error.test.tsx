import React from "react";
import { render } from "@testing-library/react";
import Error from "./error";
import ContextWrapper from "context/config.context";
import * as Context from "context/config.context";

describe("Error test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(
      <ContextWrapper defaultTheme="light">
        <Error />
      </ContextWrapper>
    );
    expect(container).toMatchSnapshot();
  });

  it("should match snopshot with error", async () => {
    jest.spyOn(Context, "useConfigContext").mockImplementation(() => ({
      state: { error: "error", themeMode: "light" },
      dispatch: jest.fn(),
    }));
    const { findByTestId } = render(
      <ContextWrapper defaultTheme="light">
        <Error />
      </ContextWrapper>
    );
    expect(findByTestId("snackbar-error")).toBeTruthy();
    expect(await findByTestId("snackbar-error")).toHaveTextContent("error");
  });
});
