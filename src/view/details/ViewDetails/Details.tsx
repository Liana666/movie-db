import { preparingMovieDetails } from "../../../utils/helpers/preparingMovieDetails";

import { DetailsMovie } from "../../../type/type";

import style from "./Details.module.scss";

export const Details: React.FC<DetailsMovie> = ({
  backdrop_path,
  genres,
  original_title,
  video,
  status,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}) => {
  console.log(video);
  return (
    <div className={style.single}>
      <div className={style.single__banner}>
        <img
          src={`https://image.tmdb.org/t/p/original` + backdrop_path}
          alt=""
        />
        <div className="container">
          <div className={style.single__wrapper}>
            <div className={style.single__cover}>
              <img
                src={`https://image.tmdb.org/t/p/original` + poster_path}
                alt=""
              />
            </div>
            <div className="single__info">
              <div>
                {/* <AddFavoriteContainer id={id} /> */}
                <div className={style.single__title}>
                  <span>{title}</span>
                </div>
                <div className={style.single__date}>
                  <div>
                    <p>Start date: </p>
                    {release_date}
                  </div>
                  <hr />
                  <div>
                    <p>Vote: </p>
                    {vote_average}
                  </div>
                </div>
              </div>

              <div className={style.single__description}>{overview}</div>
              <div className={style.single__counts}>
                <div className={style.single__countsItem}>
                  <p>Status:</p>
                  <p>{status}</p>
                </div>
                {video && (
                  <div className={style.single__countsItem}>
                    <p>Video:</p>
                    <p>{video}ᐅ</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 40 }} className="container">
        <ul className={style.single__genres}>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
