import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { login } from "../../../store/slices/userSlice";

import { Header } from "./Header";

import { auth } from "../../../firebase/firebase";
import { useAppDispatch } from "../../../hooks/hooks";

export const HeaderContainer = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useAppDispatch();
  const [emailUser, setEmailUser] = useState<string | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setEmailUser(userAuth.email);
        dispatch(login(userAuth.email));
      }
    });
  }, [dispatch]);

  const signOut = () => {
    auth.signOut();
    dispatch(login(null));
    setEmailUser(null);
    navigate("/login");
  };

  return (
    <Header
      emailUser={emailUser}
      pathname={location.pathname}
      signOut={signOut}
    />
  );
};
