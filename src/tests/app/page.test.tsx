import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "@/app/(landing)/page";

describe("Home page", () => {
  it("renders introductory text", () => {
    render(<Home />);
    expect(
      screen.getByText("Read our docs")
    ).toBeInTheDocument();
  });
});