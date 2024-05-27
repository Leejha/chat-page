import styled from "styled-components";

function CheckboxSaveId() {
  return (
    <Container>
      <Checkbox type="checkbox" id="saveID" />
      <CheckboxLabel htmlFor="saveID">아이디 저장</CheckboxLabel>
    </Container>
  );
}

const Container = styled.div`
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

const CheckboxLabel = styled.label`
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  text-align: left;
  display: inline-block;
  color: ${({ theme }) => theme.colors.black_02};
`;

export default CheckboxSaveId;
