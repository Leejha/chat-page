import { Chat } from "../lib";
import MessageSangnyang from "./message-sangnyang";
import MessageUser from "./message-user";

interface Props {
  chatList: Chat[];
}

function ChatList({ chatList }: Props) {
  return (
    <>
      {chatList.map((chat) => {
        const { question, answer, createdAt } = chat;
        return (
          <div key={self.crypto.randomUUID()}>
            <MessageUser createdAt={createdAt}>{question}</MessageUser>
            {answer && (
              <MessageSangnyang createdAt={createdAt}>
                {answer}
              </MessageSangnyang>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ChatList;
