import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("Has valid header", () => {
    render(<App />);
    expect(screen.getByRole("heading").toHaveTextContent("TDD Test Header"));
  });

  test("Has valid heading update action", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Update Heading" });

    userEvent.click(button);

    expect(screen.getByRole("heading")).toHaveTextContent("New TDD Test Header");
  });
});
