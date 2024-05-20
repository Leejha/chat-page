import axios from "axios";
import { SERVER_URL, userStorage } from "../constants";
import { logout } from "../utils";

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

export const http = axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const { status } = error.response;

    switch (status) {
      case 401: {
        const tokens = userStorage.get();
        if (!tokens) {
          throw new Error("No tokens found");
        }

        alert("로그인이 만료되었습니다. 다시 로그인해주세요.");

        logout();

        break;
      }

      default: {
        alert(error.response.data.message);
        throw new Error("Unknown Error");
      }
    }
  }
);

axiosInstance.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }

  const token = userStorage.get();
  if (!token) {
    throw new Error("No token found");
  }
  const { access_token } = token;

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});
