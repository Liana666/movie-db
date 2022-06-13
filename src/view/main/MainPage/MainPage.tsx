import { NavbarContainer } from "../../../components/layout/navbar/NavbarContainer";
import { genresApi } from "../../../store/api/genresApi";
import { FetchPopularMovie } from "../../popular/FetchPopularMovie/FetchPopularMovie";

export const MainPage = () => {
  //const { data } = genresApi.useGetGenresQuery({});
  return (
    <>
      <NavbarContainer />
      <div className="container">
        <FetchPopularMovie />
      </div>
    </>
  );
};
