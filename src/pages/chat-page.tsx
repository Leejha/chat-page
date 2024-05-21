import styled from "styled-components";
import { Button, MessageUser, TopicBottomSheet } from "../components";
import MessageSangnyang from "../components/message-sangnyang";
import { useToggle } from "../hooks";

const contents = [
  {
    question: "",
    answer: "고민주제 선택하기",
    created_at: "2023-10-30T05:00:00",
  },
  {
    question: "",
    answer: "고민주제 선택하기",
    created_at: "2023-10-30T05:00:00",
  },
  {
    question: "안녕하세요! 고민이 있어서 찾아왔어요.",
    answer: "고민주제 선택하기",
    created_at: "2023-10-30T05:00:00",
  },
];

function ChatPage() {
  const [toggleBottomSheet, onToggleBottomSheet] = useToggle(true);

  return (
    <Layout>
      <Content>
        <Header>
          <img src="src/assets/menu-icon.svg" alt="menu" />
          <img src="src/assets/new-icon.svg" alt="new" />
        </Header>
        <ChatContainer>
          <DateBox>2023년 41월 12일</DateBox>
          <MessageList>
            <MessageSangnyang isFirstMessage createdAt="2023-10-30T05:00:00">
              "만나서 반가워요! <br />
              여러분의 고민을 들어줄 AI 상냥이에요. 어떤 일이 있어서
              찾아왔나요?"
            </MessageSangnyang>
            {contents.map((content, index) => {
              const { question, answer, created_at } = content;
              return (
                <>
                  {question && (
                    <MessageSangnyang
                      createdAt={created_at}
                      key={`sangnyang-${index}`}
                    >
                      {question}
                    </MessageSangnyang>
                  )}
                  {answer && (
                    <MessageUser createdAt={created_at} key={`user-${index}`}>
                      {answer}
                    </MessageUser>
                  )}
                </>
              );
            })}
          </MessageList>
          <InputSection>
            <Input placeholder="상냥이와 이야기를 나눠보세요!" />
            <InputButton width="32px" height="32px"></InputButton>
          </InputSection>
        </ChatContainer>
        {toggleBottomSheet && (
          <TopicBottomSheet onToggleBottomSheet={onToggleBottomSheet} />
        )}
      </Content>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 480px;
  height: 100vh;
`;

const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.colors.black_04} inset;
`;

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

const ChatContainer = styled.main`
  position: relative;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.ul`
  flex: 1;
  overflow: auto;
  margin-top: 24px;
`;

const InputSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black_04};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 0 16px;
`;

const Input = styled.input`
  border-radius: 8px;
  width: 400px;
  height: 40px;
  padding: 8px;
  background-color: white;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.black_01};
  &::placeholder {
    color: ${({ theme }) => theme.colors.black_03};
  }
`;

const InputButton = styled(Button)`
  margin-left: 16px;
  background: url("src/assets/send-icon.svg")
    ${({ theme }) => theme.colors.main} no-repeat center;
`;

export default ChatPage;
