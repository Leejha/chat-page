import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { GetChatResponse, getChatAPI, reactQueryKeys } from "../lib";
import { useInfiniteScroll, useScroll } from "../hooks";
import { useEffect, useRef, useState } from "react";

export default function useGetChat() {
  const queryClient = useQueryClient();
  const [isWheelFetching, setWheelFetching] = useState<boolean>(true);
  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  /**
   * @description 이전 채팅 기록을 무한 스크롤 방식으로 로드
   */
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: reactQueryKeys.getChatLogs({}),
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getChatAPI({
        page: pageParam,
        num: 10,
      }),
    getNextPageParam: (_, __, lastPageParam) => lastPageParam + 1,
    enabled: false,
  });

  const [subscribe] = useInfiniteScroll(() => {
    !isWheelFetching && fetchNextPage();
  });

  const previousChatList: GetChatResponse[] =
    data?.pages.flatMap((page) => page.content) ?? [];

  const onResetPreviousChatList = () => {
    setWheelFetching(true);
    queryClient.resetQueries({
      queryKey: reactQueryKeys.getChatLogs({}),
    });
  };

  /**
   * @description 역방향 무한스크롤시 스크롤 위치를 유지하기 위한 로직
   */

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
