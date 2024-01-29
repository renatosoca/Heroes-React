import Cookies from "js-cookie";

export const setCookies = (cookieName: string, cookieValue: string) => {
  return Cookies.set(cookieName, cookieValue, {
    expires: 1,
    secure: false,
    sameSite: "none",
  });
};

export const getCookies = (cookieName: string) => {
  return Cookies.get(cookieName);
};

export const clearCookie = (cookieName: string) => {
  return Cookies.remove(cookieName, {
    expires: 1,
    secure: false,
    sameSite: "none",
  });
};
