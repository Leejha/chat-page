import styled from "styled-components";
import {
  Header,
  InputSection,
  MessageList,
  TopicBottomSheet,
} from "../components";
import { useToggle } from "../hooks";
import { useGetChat, useMutationChat } from "../services";

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

  const {
    previousChatList,
    onScroll,
    scrollRef,
    subscribe,
    onResetPreviousChatList,
  } = useGetChat();

  return (
    <>
      <Header
        onResetChatList={() => {
          onResetCurrentChatList();
          onResetPreviousChatList();
        }}
      />
      <Container>
        <MessageList
          currentChatList={currentChatList}
          previousChatList={previousChatList}
          onToggleBottomSheet={onToggleBottomSheet}
          scrollRef={scrollRef}
          onScroll={onScroll}
          subscribe={subscribe}
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

const Container = styled.main`
  position: relative;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
`;

export default ChatContainer;
