import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { App } from "./App";
import { MemoryRouter } from "react-router-dom";

test("routing check test", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const loginLink = screen.getByTestId("login-link");
  const registerLink = screen.getByTestId("register-link");

  expect(screen.getByTestId("main-page")).toBeInTheDocument();

  fireEvent.click(loginLink);
  expect(screen.getByTestId("login-page")).toBeInTheDocument();

  fireEvent.click(registerLink);
  expect(screen.getByTestId("register-page")).toBeInTheDocument();
});

test("error page test", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/page1"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId("error-page")).toBeInTheDocument();
});
