import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginAndRegister } from "../../../hoc/LoginAndRegister";

import gif from "../../img/smile.gif";

export const LoginPage = () => {
  return (
    <>
      <img className="videoImg" src={gif} alt="" />

      <div className="videoContainer">
        <div className="videoWrapper">
          <LoginAndRegister
            btnValue="Login"
            firebaseFunction={signInWithEmailAndPassword}
          />

          <p className="linkRegister">
            Or <Link to="/register">register</Link>
          </p>
        </div>
      </div>
    </>
  );
};