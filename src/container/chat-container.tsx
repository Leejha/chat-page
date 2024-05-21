import styled from "styled-components";
import {
  Header,
  InputSection,
  MessageList,
  TopicBottomSheet,
} from "../components";
import { useToggle } from "../hooks";

import { useMutationChat } from "../services";
import { getCurrentDate } from "../lib";

function ChatContainer() {
  const [toggleBottomSheet, onToggleBottomSheet] = useToggle(true);

  const {
    selectedTopic,
    onChangeTopic,
    question,
    onChangeQuestion,
    currentChatList,
    postChat,
    onResetCurrentChatList,
    isPending,
  } = useMutationChat();

  return (
    <>
      <Header onResetCurrentChatList={onResetCurrentChatList} />
      <Container>
        <DateBox>{getCurrentDate()}</DateBox>
        <MessageList
          currentChatList={currentChatList}
          onToggleBottomSheet={onToggleBottomSheet}
        />

        <InputSection
          question={question}
          onChangeQuestion={onChangeQuestion}
          postChat={postChat}
          isPending={isPending}
        />
      </Container>
      {toggleBottomSheet && (
        <TopicBottomSheet
          selectedTopic={selectedTopic}
          onChangeTopic={onChangeTopic}
          question={question}
          onChangeQuestion={onChangeQuestion}
          onClickSelect={() => {
            onToggleBottomSheet();
            postChat();
          }}
        />
      )}
    </>
  );
}

const DateBox = styled.div`
  width: 104px;
  height: 24px;
  padding: 4px 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black_04};
  margin: 28px auto 0 auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.04em;
  text-align: center;
`;

const Container = styled.main`
  position: relative;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
`;

export default ChatContainer;
