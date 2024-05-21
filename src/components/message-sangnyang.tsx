import styled from "styled-components";
import Button from "./button";

interface Props {
  isFirstMessage?: boolean;
}

function MessageSangnyang({ isFirstMessage = false }: Props) {
  return (
    <Message>
      <CharacterImage></CharacterImage>
      <Column>
        <Name>상냥이</Name>
        <TextBox>
          만나서 반가워요! 여러분의 고민을 들어줄 AI 상냥이에요. 어떤 일이
          있어서 찾아왔나요?
          {isFirstMessage && (
            <Button width="100%" height="40px">
              고민주제 선택하기
            </Button>
          )}
        </TextBox>
      </Column>
      <CreatedAt>오후 2:30</CreatedAt>
    </Message>
  );
}

const Message = styled.li`
  display: flex;
`;

const CharacterWrapper = styled.div``;

const Column = styled.div`
  margin-left: 8px;
`;

const CharacterImage = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: url("src/assets/sangnyang-small.png")
    ${({ theme }) => theme.colors.sub} no-repeat center;
`;

const TextBox = styled.div`
  margin-top: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border_01};
  max-width: 280px;
  border-radius: 0px 16px 16px 16px;
  padding: 12px 16px 12px 16px;
  line-height: 21px;
  letter-spacing: -0.05em;
`;

const Name = styled.div``;

const CreatedAt = styled.div`
  display: flex;
  align-items: end;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.black_03};
  margin-left: 4px;
`;

export default MessageSangnyang;
