import { useCallback } from "react";
import useIntersectionObserver from "./use-intersection-observer";

export default function useInfiniteScroll<T extends HTMLElement>(
  onLoadMore: () => unknown,
  options?: IntersectionObserverInit
) {
  const subscriber = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (!entry?.isIntersecting) {
        return;
      }
      onLoadMore();
    },
    [onLoadMore]
  );

  return useIntersectionObserver<T>(subscriber, options);
}
