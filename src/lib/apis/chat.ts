import { http } from "./http";

export interface GetChatRequest {
  page: number;
  num: number;
}

export interface Chat {
  question: string;
  answer: string;
}

export interface GetChatResponse extends Chat {
  createdAt: string;
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
export interface PostChatResponse extends Chat {}

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
