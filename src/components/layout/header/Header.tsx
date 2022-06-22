import { NavLink } from "react-router-dom";

import { LogoutIcon } from "../../svg/LogoutIcon";

import style from "./Header.module.scss";

type Props = {
  emailUser: string | null;
  pathname: string;
  signOut: () => void;
};

export const Header: React.FC<Props> = ({ emailUser, pathname, signOut }) => {
  const isMain =
    pathname === "/" ||
    pathname.includes("/filter/") ||
    pathname.includes("/search/");

  return (
    <header>
      <div
        className={
          isMain ? style.header + " " + style.header__main : style.header
        }
      >
        <NavLink to="/">
          <div className={style.header__logo}>Movie</div>
        </NavLink>

        {emailUser ? (
          <>
            <div className={style.header__linksMob}>
              <NavLink data-testid="favorites-link" to="/favorites">
                Favorites
              </NavLink>
              <NavLink data-testid="history-link" to="/history">
                History
              </NavLink>
            </div>
            <div className={style.header__links}>
              <span>Hi, {emailUser}</span>
              <div onClick={signOut} className={style.header__btnLogout}>
                <LogoutIcon />
              </div>
            </div>
          </>
        ) : (
          <div className={style.header__links}>
            <div className={style.header__btnLogout}>
              <NavLink data-testid="login-link" to="/login">
                Login
              </NavLink>
            </div>
            <div className={style.header__btnLogout}>
              <NavLink data-testid="register-link" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
