export const validateRequired = (value, fieldName = "This field") => {
  if (!value || !value.trim()) {
    return `${fieldName} is required`;
  }
  return null;
};

export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }

  const minLength = 8;
  const hasCapital = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 8 characters long";
  }
  if (!hasCapital) {
    return "Password must contain at least 1 capital letter";
  }
  if (!hasNumber) {
    return "Password must contain at least 1 number";
  }
  if (!hasSymbol) {
    return "Password must contain at least 1 symbol";
  }

  return null;
};
