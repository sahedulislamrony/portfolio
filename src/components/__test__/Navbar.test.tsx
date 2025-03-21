import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the Navbar and its subcomponents", () => {
    render(<Navbar />);

    // Check if the Navbar is in the DOM
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });
});
