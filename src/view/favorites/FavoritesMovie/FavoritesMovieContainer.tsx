import { useFavorites } from "../../../store/selectors/selectors";

import { FavoritesMovie } from "./FavoritesMovie";

export const FavoritesMovieContainer = () => {
  const ids = useFavorites();
  return (
    <div className="grid">
      {ids && ids.length > 0 ? (
        ids.map((id) => <FavoritesMovie key={id} id={id} />)
      ) : (
        <h2>No favorites anime</h2>
      )}
    </div>
  );
};
