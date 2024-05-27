import styled from "styled-components";

interface Props {
  onResetChatList: () => void;
}

function Header({ onResetChatList }: Props) {
  return (
    <Container>
      <img src="src/assets/menu-icon.svg" alt="menu" />
      <Button onClick={onResetChatList}>
        <img src="src/assets/new-icon.svg" alt="new" />
      </Button>
    </Container>
  );
}

const Container = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.colors.black_04} inset;
`;

const Button = styled.button`
  cursor: pointer;
`;

export default Header;
