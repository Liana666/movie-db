import { NavbarContainer } from "../../../components/layout/navbar/NavbarContainer";
import { FetchFilterMovie } from "../FetchFilterMovie/FetchFilterMovie";

export const Filterpage = () => {
  return (
    <>
      <NavbarContainer />
      <div className="container">
        <FetchFilterMovie />
      </div>
    </>
  );
};
