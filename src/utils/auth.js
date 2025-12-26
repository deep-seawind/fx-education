export const isLoggedIn = () => {
  return Boolean(localStorage.getItem("auth_token"));
};