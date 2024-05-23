import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  PostChatResponse,
  postChatAPI,
  reactQueryKeys,
  saveChatAPI,
} from "../lib";
import { formatDateTime } from "../lib/utils/format-date-time";

export const TOPIC_LIST = [
  { value: "career", label: "학업진로" },
  { value: "relationship", label: "대인관계" },
  { value: "addiction", label: "인터넷-스마트폰 중독" },
  { value: "family", label: "가족" },
] as const;

export interface Topic {
  value: string;
  label: string;
}

interface CurrentChatList extends PostChatResponse {
  createdAt: string;
}

export default function useMutationChat() {
  const queryClient = useQueryClient();

  const [selectedTopic, setTopic] = useState<Topic>({
    value: "",
    label: "",
  });
  const onChangeTopic = (value: Topic) => {
    setTopic(value);
  };

  const [question, setQuestion] = useState("");
  const onChangeQuestion = (value: string) => {
    setQuestion(value);
  };
  const onResetQuestion = () => {
    setQuestion("");
  };
  const [currentChatList, setCurrentChatList] = useState<CurrentChatList[]>([]);
  const onResetCurrentChatList = () => {
    setCurrentChatList([]);
  };
  const currentDateTime = new Date().toISOString();
  const formattedTime = formatDateTime(currentDateTime);
  const {
    data: postChatResponse,
    mutate: postChat,
    isPending,
  } = useMutation({
    mutationFn: () => postChatAPI({ question }),
    onSuccess: ({ question, answer }) => {
      saveChatAPI({ question, answer });
      setCurrentChatList((prev) => [
        ...prev,
        { question, answer, createdAt: formattedTime },
      ]);
      onResetQuestion();
      queryClient.invalidateQueries({
        queryKey: reactQueryKeys.getChatLogs({}),
      });
    },
  });
  return {
    selectedTopic,
    onChangeTopic,
    question,
    onChangeQuestion,
    onResetQuestion,
    postChatResponse,
    postChat,
    currentChatList,
    onResetCurrentChatList,
    isPending,
  };
}
