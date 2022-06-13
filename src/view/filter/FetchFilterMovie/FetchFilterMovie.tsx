import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../../components/shared/List/List";
import { FetchContainer } from "../../../hoc/FetchContainer";
import { filterApi } from "../../../store/api/filterApi";

export const FetchFilterMovie = () => {
  const { genres, year } = useParams();
  const [genre, setGenre] = useState("");

  useEffect(() => {
    genres && setGenre(genres);
  }, [genres]);

  return (
    <FetchContainer
      fetch={filterApi.useFilterMoviesQuery(
        { page: 1, year, genre },
        { skip: !genre }
      )}
    />
  );
};
