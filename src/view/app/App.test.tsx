import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store";
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

  const favoritesLink = screen.getByTestId("favorites-link");
  const historyLink = screen.getByTestId("history-link");
  const loginLink = screen.getByTestId("login-link");
  const registerLink = screen.getByTestId("register-link");

  expect(screen.getByTestId("main-page")).toBeInTheDocument();

  fireEvent.click(historyLink);
  expect(screen.getByTestId("history-page")).toBeInTheDocument();

  fireEvent.click(favoritesLink);
  expect(screen.getByTestId("favorites-page")).toBeInTheDocument();

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
