import styled, { css } from "styled-components";
import { useToggle } from "../hooks";
import { Select } from "./selectBox";

const TOPIC_LIST = [
  { value: "career", label: "학업진로" },
  { value: "relationship", label: "대인관계" },
  { value: "addiction", label: "인터넷-스마트폰 중독" },
  { value: "family", label: "가족" },
];

interface Props {
  defaultOption: string;
  onChangeSortOption: (id: string) => void;
}

function TopicSelectBox({ defaultOption, onChangeSortOption }: Props) {
  const [isOpen, onToggleOpen] = useToggle(true);

  return (
    <SelectStyled isOpen={isOpen}>
      <Select
        defaultValue={defaultOption}
        onChangeSelectedOption={onChangeSortOption}
        options={TOPIC_LIST}
        isOpen={isOpen}
        onToggleOpen={onToggleOpen}
      >
        <img src="src/assets/expend-more-icon.svg" alt="expend-mor" />
      </Select>
    </SelectStyled>
  );
}

const SelectStyled = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    color: ${theme.colors.black_03};
    width: 100%;
    height: 48px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.02em;

    .selected-label {
      border: 1px solid ${theme.colors.black_04};
      border-radius: 8px;
      padding: 12px 16px;
    }
    img {
      ${isOpen && "transform: rotateX( 180deg )"}
    }
    #select-list {
      width: 400px;
      height: 226px;
      display: flex;
      flex-direction: column;
      padding: 8px;
      gap: 8px;
    }
    li {
      width: 100%;
      height: 48px;
      border-radius: 8px;
      padding: 16px 12px;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.main};
        background-color: ${theme.colors.sub};
      }
    }
    #indicator {
      display: flex;
    }
  `}
`;

export default TopicSelectBox;
