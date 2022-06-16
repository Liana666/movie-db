import { NavbarContainer } from "../../../components/layout";
import { FetchFilterMovie } from "../FetchFilterMovie/FetchFilterMovie";

export const FilterPage = () => {
  return (
    <>
      <NavbarContainer />
      <div className="container">
        <FetchFilterMovie />
      </div>
    </>
  );
};
