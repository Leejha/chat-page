import styled from "styled-components";
import MessageUser from "./message-user";
import MessageSangnyang from "./message-sangnyang";
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

function MessageList({
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
      {previousChatList.map((chat, index) => {
        const { question, answer, createdAt } = chat;
        return (
          <>
            <MessageUser createdAt={createdAt} key={`before-user-${index}`}>
              {question}
            </MessageUser>
            <MessageSangnyang
              createdAt={createdAt}
              key={`before-sangnyang-${index}`}
            >
              {answer}
            </MessageSangnyang>
          </>
        );
      })}
      <MessageSangnyang
        isFirstMessage
        createdAt={formattedTime}
        onToggleBottomSheet={onToggleBottomSheet}
      >
        "만나서 반가워요! <br />
        여러분의 고민을 들어줄 AI 상냥이에요. <br />
        어떤 일이 있어서 찾아왔나요?"
      </MessageSangnyang>
      {currentChatList.map((chat, index) => {
        const { question, answer, createdAt } = chat;
        return (
          <>
            <MessageUser createdAt={createdAt} key={`user-${index}`}>
              {question}
            </MessageUser>
            <MessageSangnyang createdAt={createdAt} key={`sangnyang-${index}`}>
              {answer}
            </MessageSangnyang>
          </>
        );
      })}
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

export default MessageList;
