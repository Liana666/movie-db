import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <div className={styles.logo}>Movie</div>
      </NavLink>
      <NavLink data-testid="favorites-link" to="/favorites">
        Favorites
      </NavLink>
      <NavLink data-testid="history-link" to="/history">
        History
      </NavLink>
      <NavLink data-testid="login-link" to="/login">
        Login
      </NavLink>
      <NavLink data-testid="register-link" to="/register">
        Register
      </NavLink>
    </header>
  );
};
