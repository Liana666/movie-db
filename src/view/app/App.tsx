import { Route, Routes } from "react-router-dom";
import { HeaderContainer } from "../../components/layout";
import { DetailsPage } from "../details/DetailsPage/DetailsPage";
import { ErrorPage } from "../error/ErrorPage/ErrorPage";
import { FavoritesPage } from "../favorites/FavoritesPage/FavoritesPage";
import { FilterPage } from "../filter/FilterPage/FilterPage";
import { LoginPage } from "../auth/Pages/LoginPage";
import { RegisterPage } from "../auth/Pages/RegisterPage";
import { HistoryPage } from "../history/HistoryPage/HistoryPage";
import { MainPage } from "../main/MainPage/MainPage";
import { SearchPage } from "../search/SearchPage/SearchPage";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <HeaderContainer />
      <main data-testid="main-page">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route
            path="/filter/genre=:genres/year=:year"
            element={<FilterPage />}
          />
          <Route path="/search/title=:title" element={<SearchPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
};
