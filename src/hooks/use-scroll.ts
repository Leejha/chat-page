import { useRef } from "react";

export default function useScroll<T>(func: () => void) {
  const lastTouchEventTimeRef = useRef(0);

  const onScroll = (e: React.WheelEvent<T>) => {
    const now = Date.now();
    const timeDiff = now - lastTouchEventTimeRef.current;

    if (timeDiff < 1500) {
      // 이전 이벤트가 1.5초 내에 발생한 경우 무시
      return;
    }

    lastTouchEventTimeRef.current = now;

    // 휠을 올리면 함수 실행
    if (e.deltaY < 0) {
      setTimeout(() => {
        func();
      }, 750);
    }
  };

  return {
    onScroll,
  };
}
