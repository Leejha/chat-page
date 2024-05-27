import { http } from "./http";

export interface GetChatRequest {
  page: number;
  num: number;
}

export interface Chat {
  question: string;
  answer: string;
  createdAt: string;
}

interface GetChatResponse {
  page: number;
  content: Chat[];
}

export const getChatAPI = async (getChatRequest: GetChatRequest) => {
  const response = await http.get<GetChatResponse>("/chatlogs", {
    params: getChatRequest,
  });
  return response.data;
};

interface PostChatRequest {
  question: string;
}

export interface PostChatResponse extends Omit<Chat, "createdAt"> {}

export const postChatAPI = async (postChatRequest: PostChatRequest) => {
  const response = await http.post<PostChatResponse>("/chat", postChatRequest);
  return response.data;
};

interface SaveChatRequest extends Omit<Chat, "createdAt"> {}

export const saveChatAPI = async (saveChatRequest: SaveChatRequest) => {
  const response = await http.post("/chatlogs", saveChatRequest);
  return response.data;
};
