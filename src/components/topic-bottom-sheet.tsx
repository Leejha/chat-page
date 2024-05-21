import styled, { css } from "styled-components";
import Button from "./button";
import BottomSheetTemplate from "./bottom-sheet-template";
import TopicSelectBox from "./topic-select-box";

interface Props {
  selectedTopic: string;
  onChangeTopic: (value: string) => void;
  question: string;
  onChangeQuestion: (value: string) => void;
  onClickSelect: () => void;
}

function TopicBottomSheet({
  selectedTopic,
  onChangeTopic,
  question,
  onChangeQuestion,
  onClickSelect,
}: Props) {
  return (
    <BottomSheetTemplate width="480px" height="622px" onToggleModal={() => {}}>
      <Inner>
        <Title>고민 주제 선택하기</Title>
        <SubTitle>고민 주제</SubTitle>
        <TopicSelectBox
          defaultOption={selectedTopic}
          onChangeSortOption={onChangeTopic}
        />
        <EmptySpace />
        <SubTitle>고민 내용</SubTitle>
        <TextArea
          placeholder="고민 내용을 입력해주세요."
          value={question}
          onChange={(e) => onChangeQuestion(e.target.value)}
        />
        <CheckButton
          width="100%"
          height="40px"
          disabled={selectedTopic === "" || question === ""}
          onClick={onClickSelect}
        >
          확인
        </CheckButton>
      </Inner>
    </BottomSheetTemplate>
  );
}

const Inner = styled.div`
  padding: 24px 40px 22px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 800;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.black_01};
`;

const SubTitle = styled.h4`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.05em;
`;

const EmptySpace = styled.div`
  margin-top: 250px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-top: 8px;
  padding: 13px 16px;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: -0.02em;
  border: 1px solid ${({ theme }) => theme.colors.border_02};
  color: ${({ theme }) => theme.colors.black_02};
  &::placeholder {
    color: ${({ theme }) => theme.colors.black_04};
  }
`;

const CheckButton = styled(Button)`
  ${({ theme, disabled }) => css`
    color: ${disabled ? theme.colors.black_03 : "white"};
    background-color: ${disabled ? theme.colors.black_04 : theme.colors.main};
    margin-top: 16px;
    text-align: center;
  `}
`;

export default TopicBottomSheet;
