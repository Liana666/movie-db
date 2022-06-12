import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import { Item } from "./Item";

const Details = {
  id: 23,
  genre_ids: [28],
  original_title: "The Batman",
  overview:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, dolores voluptate molestias impedit vel libero aliquid minima ducimus modi commodi. Optio, eius quibusdam? Optio, ducimus delectus? Sequi distinctio illum quaerat similique alias eius, at eaque repudiandae asperiores quisquam ab eveniet quo corrupti tempora unde deserunt laudantium dicta nemo pariatur cumque iure quia nulla fugiat? Unde repellendus voluptatibus perferendis, hic vel nobis dolore quis veniam excepturi ullam consectetur, animi eum quae optio adipisci amet. Repellendus voluptatum asperiores modi quidem voluptas eius. Dignissimos ad odio impedit hic? Autem incidunt impedit quis consequatur saepe inventore. Id omnis reiciendis possimus magnam quos rerum voluptatum nostrum ab molestias aut quasi ea doloribus nihil consequatur, ut, sed, ipsam modi optio ullam dignissimos similique neque ex. Quibusdam beatae, eaque exercitationem fuga excepturi incidunt, ad debitis aliquam sunt nobis quo, fugiat ullam ab. Corporis assumenda, quidem, voluptates perferendis maiores cupiditate iure nulla eveniet, iste eaque error. Distinctio architecto ut nam asperiores sequi, accusantium odit at alias sunt ipsam vel debitis explicabo omnis quidem minus sint autem minima? Facilis aliquid totam aperiam alias. Numquam nihil similique id necessitatibus unde perferendis. Dignissimos beatae nulla nisi labore nihil dolore architecto corporis reprehenderit quod rem, aliquam inventore esse! Esse id unde necessitatibus",
  poster_path: "img",
  release_date: "02.02.2020",
  title: "The Batman",
};

test("proper preparation of movie data", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Item {...Details} />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId("titleEn").textContent?.length).toBe(10);
  expect(screen.getByTestId("overview").textContent?.length).toBe(153);
  expect(screen.getByText(/action/i)).toBeInTheDocument();
});
