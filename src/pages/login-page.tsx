import styled from "styled-components";
import { LoginContainer, WelcomeContainer } from "../container";

function LoginPage() {
  return (
    <Layout>
      <WelcomeContainer />
      <LoginContainer />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
`;

export default LoginPage;
