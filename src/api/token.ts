const AUTH_TOKEN_NAME = 'what-to-watch';

export type TokenType = string;

export const getToken = () : TokenType => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
};

export const saveToken = (token: TokenType) : void => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const dropToken = () : void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};

