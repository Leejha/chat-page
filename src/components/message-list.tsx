import styled from "styled-components";
import MessageUser from "./message-user";
import MessageSangnyang from "./message-sangnyang";
import { formatDateTime } from "../lib";

interface Props {
  onToggleBottomSheet: () => void;
  currentChatList: {
    question: string;
    answer: string;
    createdAt: string;
  }[];
}

function MessageList({ onToggleBottomSheet, currentChatList }: Props) {
  const currentDateTime = new Date().toISOString();
  const formattedTime = formatDateTime(currentDateTime);

  return (
    <List>
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

const List = styled.ul`
  flex: 1;
  overflow: auto;
  margin-top: 24px;
`;

export default MessageList;
