export function isValidPassword(targetValue: string) {
   const isValidPassword = targetValue.length >= 6;

   return isValidPassword ? "" : "invalid password";
}