
const TokenKey = 'Token';

export function isLogged() {
  return localStorage.getItem(TokenKey) !== null;
}

export function setLogged(isLogged) {
  return localStorage.setItem(TokenKey, isLogged);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
