import { PropsWithChildren } from "react";
import styled from "styled-components";

function Checkbox({ children }: PropsWithChildren) {
  return (
    <Container>
      <CheckboxStyled type="checkbox" id="checkbox" />
      <Label htmlFor="checkbox">{children}</Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxStyled = styled.input`
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

const Label = styled.label`
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  text-align: left;
  display: inline-block;
  color: ${({ theme }) => theme.colors.black_02};
`;

export default Checkbox;
