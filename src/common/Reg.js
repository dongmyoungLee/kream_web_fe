const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
const numberRegExp = /[0-9]/g;


export const emailCheck = (username) => {
  return emailRegEx.test(username);
}

export const passCheck = (userPass) => {
  return passwordRegEx.test(userPass);
}

export const numberCheck = (number) => {
  return numberRegExp.test(number);
}