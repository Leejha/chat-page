import styled from "styled-components";

import { useLogin } from "../services";
import { Button, CheckboxSaveId } from "../components";
import { depths } from "../lib/styles";

function LoginContainer() {
  const { formData, onChangeForm, onLogin } = useLogin();
  const { email, password } = formData;

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
        <CheckboxSaveId />
        <LoginButton width="100%" height="36px" radius="4px">
          로그인
        </LoginButton>
      </LoginForm>
    </Container>
  );
}

const Container = styled.section`
  width: 480px;
  z-index: ${depths.overlay};
  background-color: white;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #666666;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0 12px 0;
  border: 1px solid ${({ theme }) => theme.colors.border_02};
  border-radius: 4px;
`;

const LoginButton = styled(Button)`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

export default LoginContainer;
