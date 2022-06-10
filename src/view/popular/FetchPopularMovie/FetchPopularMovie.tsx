import { FetchContainer } from "../../../hoc/FetchContainer";
import { movieApi } from "../../../store/api/movieApi";

export const FetchPopularMovie = () => {
   return (
      <FetchContainer fetch={movieApi.useGetPopularMovieQuery(1)} />
   )
}