import { useEffect, useState } from "react";

import { Form } from "./Form";

import { isValidPassword } from "../../../utils/helpers/validationPassword";
import { isValidEmail } from "../../../utils/helpers/validationEmail";

type Props = {
   btnValue: string;
   handleSubmit: (email: string, password: string) => void;
};

export const FormContainer: React.FC<Props> = ({ btnValue, handleSubmit }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailActive, setEmailActive] = useState(false);
   const [passwordActive, setPasswordActive] = useState(false);
   const [emailError, setEmailError] = useState("email cannot be empty");
   const [passwordError, setPasswordError] = useState(
      "password cannot be empty"
   );
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      emailError || passwordError ? setFormValid(false) : setFormValid(true);
   }, [emailError, passwordError]);

   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setEmailError(isValidEmail(e.target.value));
   };

   const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setPasswordError(isValidPassword(e.target.value));
   };

   const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (e.target.name) {
         case "email":
            setEmailActive(true);
            break;

         case "password":
            setPasswordActive(true);
            break;
      }
   };

   return (
      <Form
         btnValue={btnValue}
         handleSubmit={handleSubmit}
         email={email}
         handleEmail={handleEmail}
         handleBlur={handleBlur}
         emailError={emailError}
         password={password}
         handlePassword={handlePassword}
         passwordError={passwordError}
         formValid={formValid}
         emailActive={emailActive}
         passwordActive={passwordActive}
      />
   );
};