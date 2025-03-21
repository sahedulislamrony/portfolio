import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";

// Disable automatic debugging output
configure({
  throwSuggestions: false, // Disables suggestions for better queries
});

// Suppress console warnings and errors during tests
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "info").mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});
