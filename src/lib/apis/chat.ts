import { http } from "./http";

export interface GetChatRequest {
  page: number;
  num: number;
}

export const getChatAPI = async (getChatRequest: GetChatRequest) => {
  const response = await http.get("/chatlogs", {
    params: getChatRequest,
  });
  return response.data;
};

export interface PostChatRequest {
  question: string;
}
export interface PostChatResponse {
  question: string;
  answer: string;
}

export const postChatAPI = async (postChatRequest: PostChatRequest) => {
  const response = await http.post("/chat", postChatRequest);
  return response.data;
};

interface SaveChatRequest {
  question: string;
  answer: string;
}

export const saveChatAPI = async (saveChatRequest: SaveChatRequest) => {
  const response = await http.post("/chatlogs", saveChatRequest);
  return response.data;
};
