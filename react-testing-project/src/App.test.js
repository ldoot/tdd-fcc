import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Test heading", () => {
  render(<App />);
  expect(escreen.getByRole("heading", { level: 1 })).toHaveTextContent("TDD Test Header");
});

//getByRole: Level: 1 indicates that we wish to test the H1 component of the rendered <App/>.

// Other ways that we could have achieved the same test case as above:

/**

// 1. Using jest-dom's toHaveTextContent() method:
expect(screen.getByRole("heading")).toHaveTextContent(/TDD Test Header/i);

// 2. Using the heading's textContent property and Jest's toMatch() method:
expect(screen.getByRole("heading").textContent).toMatch(/TDD Test Header/i);

// 3. Using React Testing Library's name option and jest-dom's toBeInTheDocument() method
expect(screen.getByRole("heading", { name: /TDD Test Header/i })).toBeInTheDocument();
 
 */
