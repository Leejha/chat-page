import styled from "styled-components";
import { BalloonText } from "../components";

function WelcomeContainer() {
  return (
    <Container>
      <BalloonText />
      <Character src="src/assets/sangnyang-large.svg" alt="character" />
    </Container>
  );
}

const Container = styled.section`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.sub};
  height: 100vh;
  position: relative;
`;

const Character = styled.img`
  position: absolute;
  bottom: 0px;
  right: -184px;
`;
export default WelcomeContainer;
