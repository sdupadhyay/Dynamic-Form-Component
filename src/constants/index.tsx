export const emailValidation = "emailValidation";
export const phonenumberValidation = "phonenumberValidation";
export const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
};
export const validatePhoneNumber = (phoneNumber: string) => {
  const numberRegex = /[6-9]{1}[0-9]{9}$/;
  return numberRegex.test(phoneNumber);
};
