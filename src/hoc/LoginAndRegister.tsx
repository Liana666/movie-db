import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../store/slices/userSlice";

import { FormContainer } from "../view/auth/Form/FormContainer";
import { auth } from "../firebase/firebase";

type Auth = typeof auth;
type Props = {
  firebaseFunction: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<any>;
  btnValue: string;
};

export const LoginAndRegister: React.FC<Props> = ({
  firebaseFunction,
  btnValue,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    firebaseFunction(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.email));
        navigate("/");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return <FormContainer btnValue={btnValue} handleSubmit={handleLogin} />;
};
