import styled from "styled-components";

function MessageUser() {
  return (
    <Message>
      <CreatedAt>오후 2:30</CreatedAt>
      <TextBox>만나서 반가워요</TextBox>
    </Message>
  );
}

const Message = styled.li`
  display: flex;
  justify-content: end;
`;

const TextBox = styled.div`
  margin-top: 6px;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  max-width: 280px;
  border-radius: 16px 0px 16px 16px;
  padding: 12px 16px 12px 16px;
  line-height: 21px;
  letter-spacing: -0.05em;
`;

const CreatedAt = styled.div`
  display: flex;
  align-items: end;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.black_03};
  margin-right: 4px;
`;

export default MessageUser;
