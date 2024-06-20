import { Chat } from "../lib";
import MessageCharacter from "./message-character";
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
              <MessageCharacter createdAt={createdAt}>
                {answer}
              </MessageCharacter>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ChatList;
