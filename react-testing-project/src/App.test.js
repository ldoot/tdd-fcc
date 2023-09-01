import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App component", () => {
  test("Has valid header", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("TDD Test Header");
  });

  test("Has valid heading update action", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Update Heading" });

    act(() => {
      userEvent.click(button);
    });

    expect(screen.getByRole("heading")).toHaveTextContent("New TDD Test Header");
  });
});
