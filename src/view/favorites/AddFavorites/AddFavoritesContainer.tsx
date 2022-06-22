import { useNavigate } from "react-router-dom";

import { useFavorites } from "../../../store/selectors/selectors";
import { addFavoritesMovie } from "../../../store/slices/userSlice";
import { removeFavoritesMovie } from "../../../store/slices/userSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { AddFavorites } from "./AddFavorites";

type Props = {
  id: number;
};

export const AddFavoriteContainer: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const email = useAppSelector((state) => state.user.email);

  const favorites = useFavorites();

  const addFavorites = () => {
    if (!email) {
      navigate("/login");
    } else {
      dispatch(addFavoritesMovie({ id, email }));
    }
  };

  const removeFavorites = () => {
    dispatch(removeFavoritesMovie({ id }));
  };

  return (
    <AddFavorites
      id={id}
      favorites={favorites}
      addFavorites={addFavorites}
      removeFavorites={removeFavorites}
    />
  );
};
