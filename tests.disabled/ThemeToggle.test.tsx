import React from "react";
import { render, screen } from "@testing-library/react";
import ThemeToggle from "../components/ThemeToggle";

describe("ThemeToggle", () => {
  it("renders without crashing", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});