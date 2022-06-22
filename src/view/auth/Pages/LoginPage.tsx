import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginAndRegister } from "../../../hoc/LoginAndRegister";

import styles from "./AuthPages.module.scss";

import gif from "../../../img/smile.gif";

export const LoginPage = () => {
  return (
    <>
      <img
        data-testid="login-page"
        className={styles.videoImg}
        src={gif}
        alt=""
      />

      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <LoginAndRegister
            btnValue="Login"
            firebaseFunction={signInWithEmailAndPassword}
          />

          <p className={styles.linkRegister}>
            Or <Link to="/register">register</Link>
          </p>
        </div>
      </div>
    </>
  );
};
