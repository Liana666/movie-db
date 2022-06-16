import { NavLink } from "react-router-dom";

import { FilterFormContainer } from "../../../view/filter/FilterForm/FilterFormContainer";
import { SearchFormContainer } from "../../../view/search/SearchForm/SearchFormContainer";

import styles from "./Navbar.module.scss";

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar: React.FC<Props> = ({ isOpen, setOpen }) => {
  return (
    <div className={isOpen ? styles.sidebar__open : styles.sidebar__close}>
      <button onClick={() => setOpen(!isOpen)} className={styles.sidebar__btn}>
        {isOpen ? "-" : "+"}
      </button>
      <div className={styles.sidebar__wrapper}>
        <div className={styles.sidebar__navlinkMob}>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/history">History</NavLink>
        </div>
        <FilterFormContainer />
        <hr style={{ marginBottom: 15, color: "#858588" }} />
        <SearchFormContainer />
      </div>
    </div>
  );
};
