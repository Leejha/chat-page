import { Chat } from "../lib";
import MessageSangnyang from "./message-sangnyang";
import MessageUser from "./message-user";

interface Props {
  chatList: Chat[];
}

function ChatList({ chatList }: Props) {
  return (
    <>
      {chatList.map((chat, index) => {
        const { question, answer, createdAt } = chat;
        return (
          <>
            <MessageUser createdAt={createdAt} key={`before-user-${index}`}>
              {question}
            </MessageUser>
            {answer && (
              <MessageSangnyang
                createdAt={createdAt}
                key={`before-sangnyang-${index}`}
              >
                {answer}
              </MessageSangnyang>
            )}
          </>
        );
      })}
    </>
  );
}

export default ChatList;
