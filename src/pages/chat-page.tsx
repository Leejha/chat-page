import styled from "styled-components";
import { ChatContainer } from "../container";

function ChatPage() {
  return (
    <Layout>
      <Content>
        <ChatContainer />
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

export default ChatPage;
