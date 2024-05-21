import styled, { css } from "styled-components";
import Button from "./button";

interface Props {
  question: string;
  onChangeQuestion: (value: string) => void;
  postChat: () => void;
  isPending: boolean;
}

function InputSection({
  question,
  onChangeQuestion,
  postChat,
  isPending,
}: Props) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        postChat();
      }}
    >
      <Input
        placeholder="상냥이와 이야기를 나눠보세요!"
        value={question}
        onChange={(e) => onChangeQuestion(e.target.value)}
        disabled={isPending}
      />
      <InputButton
        width="32px"
        height="32px"
        disabled={question === "" || isPending}
      >
        <img src="src/assets/send-icon.svg" alt="send" />
      </InputButton>
    </Form>
  );
}
const Form = styled.form`
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
  ${({ theme, disabled }) => css`
    margin-left: 16px;
    border-radius: 8px;
    width: 400px;
    height: 40px;
    padding: 8px;
    font-weight: 500;
    letter-spacing: -0.02em;
    background-color: ${disabled ? theme.colors.black_03 : "white"};
    color: ${disabled ? theme.colors.black_03 : theme.colors.black_01};
    &::placeholder {
      color: ${theme.colors.black_03};
    }
  `}
`;

const InputButton = styled(Button)`
  ${({ theme, disabled }) => css`
    background-color: ${disabled ? theme.colors.black_03 : theme.colors.main};
    margin-left: 16px;
  `}
`;

export default InputSection;
