import { mailformat } from "../constants/mailformat";

export function isValidEmail(targetValue: string) {
   const isValidEmail = mailformat.test(String(targetValue).toLowerCase());

   return isValidEmail ? "" : "invalid email";
}