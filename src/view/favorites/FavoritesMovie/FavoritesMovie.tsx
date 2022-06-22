import { Item } from "../../../components/shared";
import { movieItemApi } from "../../../store/api/itemMovieApi";
//import { Preloader } from "../../preloader";

type Props = {
  id: number;
};

export const FavoritesMovie: React.FC<Props> = ({ id }) => {
  const { data, isLoading, isSuccess } = movieItemApi.useGetMovieQuery(id);

  //   if (isLoading) {
  //     return <Preloader />;
  //   }

  return isSuccess && data ? <Item {...data} /> : null;
};
