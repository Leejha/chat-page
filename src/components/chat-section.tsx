import styled from "styled-components";
import MessageSangnyang from "./message-sangnyang";
import ChatList from "./chat-list";
import { formatDateTime, getCurrentDate } from "../lib";
import { MutableRefObject, WheelEvent } from "react";

interface Props {
  onToggleBottomSheet: () => void;
  currentChatList: {
    question: string;
    answer: string;
    createdAt: string;
  }[];
  previousChatList: {
    question: string;
    answer: string;
    createdAt: string;
  }[];
  scrollRef: MutableRefObject<HTMLUListElement | null>;
  onScroll: (e: WheelEvent<HTMLUListElement>) => void;
  subscribe: (node: HTMLElement | null) => void;
}

function ChatSection({
  onToggleBottomSheet,
  currentChatList,
  previousChatList,
  scrollRef,
  onScroll,
  subscribe,
}: Props) {
  const currentDateTime = new Date().toISOString();
  const formattedTime = formatDateTime(currentDateTime);

  return (
    <List ref={scrollRef} onWheel={onScroll}>
      <div ref={subscribe}></div>
      <DateBox>{getCurrentDate()}</DateBox>
      <ChatList chatList={previousChatList} />
      <MessageSangnyang
        isFirstMessage
        createdAt={formattedTime}
        onToggleBottomSheet={onToggleBottomSheet}
      >
        "만나서 반가워요! <br />
        여러분의 고민을 들어줄 AI 상냥이에요. <br />
        어떤 일이 있어서 찾아왔나요?"
      </MessageSangnyang>
      <ChatList chatList={currentChatList} />
    </List>
  );
}

const DateBox = styled.div`
  width: 104px;
  height: 24px;
  padding: 4px 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black_04};
  margin: 28px auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.04em;
  text-align: center;
`;

const List = styled.ul`
  flex: 1;
  overflow: auto;
`;

export default ChatSection;
