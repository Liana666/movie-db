import styles from "./AddFavorites.module.scss";

type Props = {
  id: number;
  favorites: number[];
  addFavorites: () => void;
  removeFavorites: () => void;
};

export const AddFavorites: React.FC<Props> = ({
  id,
  favorites,
  addFavorites,
  removeFavorites,
}) => {
  return (
    <>
      {favorites && favorites.find((idUser) => idUser === id) ? (
        <button className={styles.cart__addFavorites} onClick={removeFavorites}>
          - Delete from favorites
        </button>
      ) : (
        <button className={styles.cart__addFavorites} onClick={addFavorites}>
          + Add in favorites
        </button>
      )}
    </>
  );
};
