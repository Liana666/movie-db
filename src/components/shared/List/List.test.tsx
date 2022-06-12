import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import { List } from "./List";

const ItemMovie = {
  id: 23,
  genre_ids: [1, 2, 3],
  original_title: "Batman",
  overview: "Lorem ipsum dolor sit amet.",
  poster_path: "img",
  release_date: "02.02.2020",
  title: "Batman",
};

test("maping received movies from movieApi", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <List data={[ItemMovie]} />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId("movie")).toBeInTheDocument();
});

test("output 'Not found' if not movies", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <List data={[]} />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
