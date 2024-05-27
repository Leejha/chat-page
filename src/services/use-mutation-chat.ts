import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  Chat,
  PostChatResponse,
  Topic,
  postChatAPI,
  reactQueryKeys,
  saveChatAPI,
} from "../lib";
import { formatDateTime } from "../lib/utils/format-date-time";

export default function useMutationChat() {
  const queryClient = useQueryClient();
  const [selectedTopic, setTopic] = useState<Topic>({
    value: "",
    label: "",
  });
  const [question, setQuestion] = useState("");
  const [currentChatList, setCurrentChatList] = useState<Chat[]>([]);

  const onChangeTopic = (value: Topic) => {
    setTopic(value);
  };
  const onResetTopic = () => {
    setTopic({ value: "", label: "" });
  };

  const onChangeQuestion = (value: string) => {
    setQuestion(value);
  };

  const onResetQuestion = () => {
    setQuestion("");
  };

  const onResetCurrentChatList = () => {
    setCurrentChatList([]);
  };

  const currentDateTime = new Date().toISOString();
  const formattedTime = formatDateTime(currentDateTime);

  const saveCurrentChat = ({ question, answer }: PostChatResponse) => {
    selectedTopic.label &&
      setCurrentChatList((prev) => [
        ...prev,
        {
          question: selectedTopic.label,
          answer: "",
          createdAt: formattedTime,
        },
      ]);
    setCurrentChatList((prev) => [
      ...prev,
      {
        question,
        answer,
        createdAt: formattedTime,
      },
    ]);
  };

  const onSuccessPostChat = ({ question, answer }: PostChatResponse) => {
    saveChatAPI({ question, answer });
    saveCurrentChat({ question, answer });
    onResetTopic();
    onResetQuestion();
    queryClient.invalidateQueries({
      queryKey: reactQueryKeys.getChatLogs({}),
    });
  };

  const {
    data: postChatResponse,
    mutate: postChat,
    isPending,
  } = useMutation({
    mutationFn: () => postChatAPI({ question }),
    onSuccess: onSuccessPostChat,
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
    setCurrentChatList,
    onResetCurrentChatList,
    isPending,
  };
}
