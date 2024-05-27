import { LocalStorageManager } from "./utils";

export const SERVER_URL = "http://35.216.122.163:8000";

interface Auth {
  access_token: string;
  token_type: string;
}
const USER_STORAGE_KEY = "SANNGYANG_USER";
export const userStorage = new LocalStorageManager<Auth>(USER_STORAGE_KEY);

export const TOPIC_LIST = [
  { value: "career", label: "학업진로" },
  { value: "relationship", label: "대인관계" },
  { value: "addiction", label: "인터넷-스마트폰 중독" },
  { value: "family", label: "가족" },
] as const;

export type Topic = (typeof TOPIC_LIST)[number] | { value: ""; label: "" };
