import { ItemMovie } from "../../../type/type"


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
   return (
      <h2>{title}</h2>
   )
}