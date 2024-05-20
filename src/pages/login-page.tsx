import styled from "styled-components";
import depths from "../styles/depths";
import { useLogin } from "../services";

function LoginPage() {
  const { formData, onChangeForm, onLogin } = useLogin();
  const { email, password } = formData;
  return (
    <Layout>
      <WelcomeSection>
        <BalloonText>
          스마트한 선생님을 위한 <br />
          스마트한 청소년 위기관리 솔루션 <br />
          <div>
            <MainColor>상냥이</MainColor>에 오신 것을 환영합니다!
          </div>
        </BalloonText>
        <Character src="src/assets/sangnyang.svg" alt="character" />
      </WelcomeSection>
      <LoginSection>
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
          <CheckboxContainer>
            <Checkbox type="checkbox" id="saveID" />
            <CheckboxLabel htmlFor="saveID">아이디 저장</CheckboxLabel>
          </CheckboxContainer>
          <Button>로그인</Button>
        </LoginForm>
      </LoginSection>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
`;

const WelcomeSection = styled.section`
  flex: 1;
  background-color: #ebeeff;
  height: 100vh;
  position: relative;
`;

const BalloonText = styled.div`
  background-color: white;
  top: 160px;
  left: 104px;
  border-radius: 20px;
  width: 510px;
  height: 202px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 41px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.border_01};

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 86%;
    border-top: 24px solid white;
    border-left: 24px solid transparent;
  }
`;

const MainColor = styled.span`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 700;
  line-height: 41.6px;
  letter-spacing: -0.05em;
`;

const Character = styled.img`
  position: absolute;
  bottom: 0px;
  right: -184px;
`;

const LoginSection = styled.section`
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.border_02};
  margin-right: 8px;
  &:checked {
    border: none;
    color: white;
    background: url("src/assets/check-icon.svg")
      ${({ theme }) => theme.colors.main} no-repeat center;
  }
`;

const CheckboxLabel = styled(Label)`
  font-weight: 500;
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

export default LoginPage;
