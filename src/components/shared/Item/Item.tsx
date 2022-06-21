import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ItemMovie } from "../../../type/type";
import { Button } from "../Button/Button";
import { preparingMovieDetails } from "../../../utils/helpers/preparingMovieDetails";
import styles from "./Item.module.scss";

export const Item: React.FC<ItemMovie> = ({
  backdrop_path,
  genre_ids,
  id,
  original_title,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}) => {
  const navigate = useNavigate();

  const { imgSrc, desciption, titleEn, genres } = preparingMovieDetails(
    poster_path,
    overview,
    original_title,
    genre_ids
  );

  return (
    <div data-testid="movie" className={styles.cart}>
      <div className={styles.cart__info}>
        {/* <AddFavoriteContainer id={id} /> */}
        <div className={styles.cart__titleWrapper}>
          <Link to={`/details/${id}`}>
            <div className={styles.cart__title}>
              <span>{title}</span>
            </div>
          </Link>
          <div className={styles.cart__date}>
            <div>
              <p>Start date: </p>
              <span>{release_date}</span>
            </div>
            <hr />
            <div>
              <p>Vote: </p>
              <span>{vote_average}</span>
            </div>
          </div>
        </div>

        <ul className={styles.cart__genres}>
          {genres.length > 0 && (
            <li className="styles.cart__genres-title">Genres: </li>
          )}

          {genres.map((genre, index, array) => (
            <li data-testid="genre" key={genre}>
              {genre}
              {index !== array.length - 1 && ","}
            </li>
          ))}
        </ul>

        <div data-testid="overview" className={styles.cart__descr}>
          {desciption}
        </div>
        <Button
          text="More"
          onClick={() => navigate(`/details/${id}`)}
          size="more"
        />
      </div>
      <div className={styles.cart__cover}>
        <div data-testid="titleEn" className={styles.cart__origTitle}>
          {titleEn}
        </div>
        <Link to={`/details/${id}`}>
          <img src={imgSrc} alt="" />
        </Link>
      </div>
    </div>
  );
};
