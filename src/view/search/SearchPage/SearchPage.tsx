import { NavbarContainer } from "../../../components/layout";
import { FetchSearchMovie } from "../FetchSearchMovie/FetchSearchMovie";

export const SearchPage = () => {
  return (
    <>
      <NavbarContainer />
      <div className="container">
        <FetchSearchMovie />
      </div>
    </>
  );
};
