import { FetchContainer } from "../../../hoc/FetchContainer";
import { movieApi } from "../../../store/api/movieApi";
import { getGenres } from "../../../utils/helpers/getGenres";

export const FetchPopularMovie = () => {
  return <FetchContainer fetch={movieApi.useGetPopularMovieQuery(1)} />;
};
