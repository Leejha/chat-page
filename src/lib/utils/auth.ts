import { userStorage } from "../constants";
import { PATH } from "../path";

export function logout() {
  if (typeof window !== "undefined") {
    userStorage.remove();
    window.location.replace(PATH.LOGIN_PAGE);
  }
}
