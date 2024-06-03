import { render, screen } from "@testing-library/react";
import App from "./App";

// teniendo problemas con antd y react testing library
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
jest.mock("antd", () => {
  return {
    ...jest.requireActual("antd"),
    Drawer: jest.fn((p) => p.children),
    Row: jest.fn((p) => p.children),
    Col: jest.fn((p) => <div data-testid="myCol">{p.children}</div>),
    Autocomplete: jest.fn(() => "Autocomplete"),
  };
});
test("renders learn react link", () => {
  render(<App />);
  // const header = screen.getByText("Empleados");
  // expect(header).toBeInTheDocument();
});
