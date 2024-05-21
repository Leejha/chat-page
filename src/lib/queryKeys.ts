import { GetChatRequest } from "./apis";

export const QUERY_KEYS = {
  CHAT_LOGS: "chatLogs" as const,
};

export const reactQueryKeys = {
  getChatLogs: ({ page, num }: Partial<GetChatRequest>) =>
    page && num
      ? ([QUERY_KEYS.CHAT_LOGS, page, num] as const)
      : ([QUERY_KEYS.CHAT_LOGS] as const),
};
