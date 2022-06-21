import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieItemApi } from "../../../store/api/itemMovieApi";

import { searchApi } from "../../../store/api/searchApi";

//import { Preloader } from "../preloader";
import { Details } from "../ViewDetails/Details";

export const DetailsContainer = () => {
  const { id } = useParams();
  const [idAnime, setIdAnime] = useState<string | number>("");

  const { data, isLoading, isSuccess } = movieItemApi.useGetMovieQuery(
    idAnime,
    {
      skip: idAnime === "",
    }
  );
  console.log(data);
  useEffect(() => {
    id && setIdAnime(id);
  }, [id]);

  //   if (isLoading) {
  //     return <Preloader />;
  //   }

  return isSuccess && data ? <Details key={data.id} {...data} /> : null;
};
