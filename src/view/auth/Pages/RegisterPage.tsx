import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginAndRegister } from "../../../hoc/LoginAndRegister";

import styles from "./AuthPages.module.scss";

import gif from "../../../img/smile.gif";

export const RegisterPage = () => {
  return (
    <>
      <img
        data-testid="register-page"
        className={styles.videoImg}
        src={gif}
        alt=""
      />

      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <LoginAndRegister
            btnValue="Register"
            firebaseFunction={createUserWithEmailAndPassword}
          />

          <p className={styles.linkRegister}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};
