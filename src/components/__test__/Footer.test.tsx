import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the Footer and its subcomponents", () => {
    render(<Footer />);

    // Check if the Navbar is in the DOM
    const footer = screen.getByRole("footer");
    expect(footer).toBeInTheDocument();
  });
});
