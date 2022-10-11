import React from "react";
import { render } from "@testing-library/react";
import NearbyFinderForm from "./form";

describe("Nearby finder form test suite", () => {
  it("should match snopshot", () => {
    const mochFunction = jest.fn();
    const submitMochFunction = jest.fn();
    const { container } = render(
      <NearbyFinderForm
        lat="0"
        lon="0"
        range="0"
        onChange={mochFunction}
        onSubmit={submitMochFunction}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should trigger the submit and show correct label on the button", () => {
    const mochFunction = jest.fn();
    const submitMochFunction = jest.fn();
    const { getByTestId } = render(
      <NearbyFinderForm
        lat="0"
        lon="0"
        range="0"
        onChange={mochFunction}
        onSubmit={submitMochFunction}
      />
    );
    const submitButton = getByTestId("submit-button");
    submitButton.click();
    expect(submitMochFunction).toHaveBeenCalledTimes(1);
    expect(submitButton).toHaveTextContent("Get nearby partners");
  });

  // add more tests here
});
