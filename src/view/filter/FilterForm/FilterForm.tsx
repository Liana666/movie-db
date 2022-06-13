import { Button } from "../../../components/shared/Button/Button";
import { Input } from "../../../components/shared/Input/Input";

import { ItemGenres } from "../../../type/type";

import styles from "./FilterForm.module.scss";

type Props = {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  genres: string;
  allGenres: ItemGenres[];
  setYear: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  filterAnime: () => void;
  clearFilter: () => void;
};

export const FilterForm: React.FC<Props> = ({
  setGenre,
  genres,
  allGenres,
  setYear,
  year,
  filterAnime,
  clearFilter,
}) => {
  return (
    <>
      <select
        className={styles.filterSelect}
        placeholder="Genres"
        onChange={(e) => setGenre(e.target.value)}
        value={genres}
        name="genres"
        id=""
      >
        <option>All genres</option>
        {allGenres &&
          allGenres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
      </select>
      <Input
        type="text"
        name="year"
        onChange={(e) => setYear(e.target.value)}
        value={year}
        placeholder="Year"
      />
      <Button
        text="Apply"
        onClick={filterAnime}
        size="large"
        disabled={!genres}
      />
      <Button
        text="Clear"
        size="large"
        onClick={clearFilter}
        disabled={!genres}
      />
    </>
  );
};
