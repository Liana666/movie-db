import PropTypes from "prop-types";

import { Button, Input } from "../../../components/shared";

import { AuthForm } from "../../../type/type";

import styles from "./Form.module.scss";

export const Form: React.FC<AuthForm> = ({
   email,
   handleEmail,
   handleBlur,
   emailError,
   password,
   handlePassword,
   passwordError,
   formValid,
   handleSubmit,
   btnValue,
   emailActive,
   passwordActive,
}) => {
   const invalidEmail = emailActive && emailError;
   const invalidPassword = passwordActive && passwordError;

   return (
      <form
         className={styles.form}
         onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(email, password);
         }}
      >
         <Input
            className={invalidEmail ? "input--login input-error" : "input--login"}
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => handleEmail(e)}
            onBlur={(e) => handleBlur(e)}
         />
         {invalidEmail && <div>{emailError}</div>}
         <Input
            className={
               invalidPassword ? "input--login input-error" : "input--login"
            }
            type="password"
            name="password"
            autoComplete="on"
            value={password}
            placeholder="password"
            onChange={handlePassword}
            onBlur={(e) => handleBlur(e)}
         />
         {invalidPassword && <div>{passwordError}</div>}

         <Button
            text={btnValue}
            disabled={!formValid}
            size="large"
            type="submit"
         />
      </form>
   );
};

Form.propTypes = {
   btnValue: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   passwordError: PropTypes.string.isRequired,
   formValid: PropTypes.bool.isRequired,
   passwordActive: PropTypes.bool.isRequired,
   emailActive: PropTypes.bool.isRequired,
   handleSubmit: PropTypes.func.isRequired,
   handleEmail: PropTypes.func.isRequired,
   handleBlur: PropTypes.func.isRequired,
   handlePassword: PropTypes.func.isRequired,
};