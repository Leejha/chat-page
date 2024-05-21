import { useQuery } from "@tanstack/react-query";
import { GetChatRequest, getChatAPI, reactQueryKeys } from "../lib";

export default function useGetChat(params: GetChatRequest) {
  const { data } = useQuery({
    queryKey: reactQueryKeys.getChatLogs(params),
    queryFn: () => getChatAPI(params),
  });
  const chatLogs = data?.content;
  return { chatLogs };
}
