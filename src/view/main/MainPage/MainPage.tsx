import { NavbarContainer } from "../../../components/layout/navbar/NavbarContainer";
import { FetchPopularMovie } from "../../popular/FetchPopularMovie/FetchPopularMovie";

export const MainPage = () => {
  return (
    <>
      <NavbarContainer />
      <div className="container">
        <FetchPopularMovie />
      </div>
    </>
  );
};
