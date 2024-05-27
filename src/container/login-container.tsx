import styled from "styled-components";

import { useLogin } from "../services";
import { Button, Checkbox } from "../components";
import { depths } from "../lib/styles";

function LoginContainer() {
  const { email, password, onChangeForm, onLogin } = useLogin();

  return (
    <Container>
      <Logo src="src/assets/logo.svg" alt="logo" />
      <LoginForm onSubmit={onLogin}>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChangeForm}
          required
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChangeForm}
          required
        />
        <Checkbox>아이디 저장</Checkbox>
        <LoginButton width="100%" height="36px" radius="4px">
          로그인
        </LoginButton>
      </LoginForm>
    </Container>
  );
}

const Container = styled.section`
  width: 480px;
  padding: 0 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${depths.overlay};
`;

const Logo = styled.img`
  width: 150px;
`;

const LoginForm = styled.form`
  text-align: left;
  margin-top: 126px;
`;

const Label = styled.label`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
  display: inline-block;
  color: ${({ theme }) => theme.colors.black_02};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0 12px 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border_02};
`;

const LoginButton = styled(Button)`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

export default LoginContainer;
