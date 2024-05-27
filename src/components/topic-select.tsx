import styled, { css } from "styled-components";

import { useToggle } from "../hooks";
import { Select } from "./select";
import { TOPIC_LIST, Topic } from "../lib";

interface Props {
  selectedTopic: Topic;
  onChangeTopic: (value: Topic) => void;
}

function TopicSelect({ selectedTopic, onChangeTopic }: Props) {
  const [isOpen, onToggle] = useToggle(true);

  return (
    <Select
      value={selectedTopic.value}
      onChangeValue={(value: string) => {
        const selectedTopic = TOPIC_LIST.find((topic) => topic.value === value);
        onChangeTopic(selectedTopic!);
      }}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <Trigger onClick={onToggle}>
        {selectedTopic.label || "항목 선택"}
        <ExpendMoreIcon
          src="src/assets/expend-more-icon.svg"
          alt="expend-mor"
          isOpen={isOpen}
        />
      </Trigger>
      <OptionList>
        {TOPIC_LIST.map(({ value, label }: Topic) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </OptionList>
    </Select>
  );
}

const Trigger = styled(Select.Trigger)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.02em;
    border-radius: 8px;
    padding: 12px 16px;
    border: 1px solid ${theme.colors.black_04};
    color: ${theme.colors.black_03};
  `}
`;

const ExpendMoreIcon = styled.img<{ isOpen: boolean }>`
  width: 12px;
  ${({ isOpen }) => isOpen && "transform: rotateX( 180deg )"}
`;

const OptionList = styled(Select.OptionList)`
  width: 400px;
  height: 226px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  position: absolute;
  margin-top: 8px;
  border-radius: 8px;
  ${({ theme }) =>
    css`
      border: solid 1px ${theme.colors.black_04};
    `}
`;

const Option = styled(Select.Option)`
  ${({ theme }) => css`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    padding: 16px 12px;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.main};
      background-color: ${theme.colors.sub};
    }
  `}
`;

export default TopicSelect;
