/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";

import Option from "./Option";

interface Option {
  value: string;
  label: string;
}
interface Props {
  options: Option[];
  onChangeSelectedOption: (value: any) => void;
  onToggleOpen: () => void;
}

function OptionList({ options, onChangeSelectedOption, onToggleOpen }: Props) {
  return (
    <Wrapper>
      <Ul id="select-list" aria-labelledby="select-box-1" role="listbox">
        {options.map(({ value, label }) => (
          <Option
            key={`select_${value}`}
            label={label}
            onChangeSelectedOption={() => {
              onChangeSelectedOption(value);
              onToggleOpen();
            }}
          />
        ))}
      </Ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Ul = styled.ul`
  position: absolute;
  margin-top: 8px;
  border-radius: 8px;
  ${({ theme }) =>
    css`
      border: solid 1px ${theme.colors.black_04};
    `}
`;

export default OptionList;
