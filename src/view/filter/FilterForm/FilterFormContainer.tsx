import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FilterForm } from "./FilterForm";
import { getGenres } from "../../../utils/helpers/getGenres";

export const FilterFormContainer = () => {
  //const dispatch = useAppDispatch();
  const [genres, setGenre] = useState("");
  const [year, setYear] = useState("2022");
  const navigate = useNavigate();
  const allGenres = getGenres();

  function filterAnime() {
    //const date = getDateHistory()
    const filterUrl = `/filter/genre=${genres}/year=${year}`;
    navigate(filterUrl);
    //dispatch(addHistory({ url: filterUrl, date }));
  }

  function clearFilter() {
    setGenre("");
    setYear("");
  }

  return (
    <>
      <FilterForm
        genres={genres}
        year={year}
        allGenres={allGenres}
        setGenre={setGenre}
        setYear={setYear}
        filterAnime={filterAnime}
        clearFilter={clearFilter}
      />
    </>
  );
};
