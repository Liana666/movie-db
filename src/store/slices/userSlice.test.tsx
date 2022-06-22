import {
  addFavoritesMovie,
  removeFavoritesMovie,
  userReducer,
} from "./userSlice";

describe("user reducer", () => {
  const newState = {
    email: "test@mail.ru",
    favorites: [{ email: "test@mail.ru", ids: 20 }],
  };

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      email: "",
      favorites: [],
      history: [],
    });
  });

  it("should favorities array increment", () => {
    const actual = userReducer(undefined, addFavoritesMovie(newState));
    expect(actual.favorites.length).toBe(1);
  });

  it("should favorities array decrement", () => {
    const actual = userReducer(undefined, removeFavoritesMovie(20));
    expect(actual.favorites.length).toBe(0);
  });
});
