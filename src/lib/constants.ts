import { LocalStorageManager } from "./utils";

export const SERVER_URL = "http://35.216.122.163:8000";

interface Auth {
  access_token: string;
  token_type: string;
}
const USER_STORAGE_KEY = "SANNGYANG_USER";
export const userStorage = new LocalStorageManager<Auth>(USER_STORAGE_KEY);
