
import { useParams } from "react-router-dom";
import { FetchContainer } from "../../../hoc/FetchContainer";

import { searchApi } from "../../../store/api/searchApi";

export const FetchSearchMovie = () => {
   const { title } = useParams();

   return (
      <FetchContainer
         fetch={searchApi.useSearchMoviesQuery({ page: 1, title })}
      />
   );
};
