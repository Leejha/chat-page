import styled from "styled-components";

import { useLogin } from "../services";
import { CheckboxSaveId } from "../components";
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
        <Button>로그인</Button>
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

const Button = styled.button`
  width: 100%;
  height: 36px;
  border: none;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  border-radius: 4px;
  margin-top: 12px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

export default LoginContainer;
