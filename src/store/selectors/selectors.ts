import { useAppSelector } from "../../hooks/hooks";

export const useFavorites = () => {
    const email = useAppSelector((state) => state.user.email);
    const favoritesUserObj = useAppSelector((state) =>
        state.user.favorites
            .filter((user) => user.email === email)[0]
            ?.ids
    );

    return favoritesUserObj;
}