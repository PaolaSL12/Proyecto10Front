export const validateInputs = (name, email, password) => {
    const isUsernameValid = name.length >= 3;
  
    const isEmailValid = email.includes("@") && email.length >= 7;
  
    const isPasswordValid = password.length >= 5 && password.length <= 20;
  
    return isUsernameValid && isEmailValid && isPasswordValid;
  };