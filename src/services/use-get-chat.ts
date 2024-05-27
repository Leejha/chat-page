import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { GetChatResponse, getChatAPI, reactQueryKeys } from "../lib";
import { useInfiniteScroll, useScroll } from "../hooks";
import { useEffect, useRef, useState } from "react";

export default function useGetChat() {
  const queryClient = useQueryClient();
  const [isWheelFetching, setWheelFetching] = useState(true);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: reactQueryKeys.getChatLogs({}),
    initialPageParam: 1,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getChatAPI({
        page: pageParam,
        num: 10,
      }),
    getNextPageParam: (_, __, lastPageParam) => lastPageParam + 1,
    enabled: false,
  });

  const previousChatList: GetChatResponse[] =
    data?.pages.flatMap((page) => page.content) ?? [];

  const onResetPreviousChatList = () => {
    setWheelFetching(true);
    queryClient.resetQueries({
      queryKey: reactQueryKeys.getChatLogs({}),
    });
  };

  const [subscribe] = useInfiniteScroll(() => {
    !isWheelFetching && fetchNextPage();
  });

  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    if (!scrollRef) return;

    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollHeight;
      setScrollHeight(scrollRef.current.scrollHeight);
    }
  }, [data?.pages]);

  const handleScroll = () => {
    if (!isWheelFetching) return;
    fetchNextPage();
    setWheelFetching(false);
  };

  const { onScroll } = useScroll<HTMLUListElement>(handleScroll);

  return {
    previousChatList,
    subscribe,
    scrollRef,
    onScroll,
    onResetPreviousChatList,
  };
}
