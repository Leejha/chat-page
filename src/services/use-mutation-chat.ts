import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Chat, Topic, postChatAPI, reactQueryKeys, saveChatAPI } from "../lib";
import { formatDateTime } from "../lib/utils/format-date-time";

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

  const [currentChatList, setCurrentChatList] = useState<Chat[]>([]);
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
      setTopic({ value: "", label: "" });
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
    setCurrentChatList,
    onResetCurrentChatList,
    isPending,
  };
}
