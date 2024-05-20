import { baseHttp } from "./base-http";

export interface LoginRequest {
  email: string;
  password: string;
}

export const loginAPI = async (loginRequest: LoginRequest) => {
  const response = await baseHttp.post("/token", loginRequest);
  return response.data;
};
