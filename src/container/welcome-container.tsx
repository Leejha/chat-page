import styled from "styled-components";
import { BalloonText } from "../components";

function WelcomeContainer() {
  return (
    <Container>
      <BalloonText />
      <Character src="src/assets/sangnyang.svg" alt="character" />
    </Container>
  );
}

const Container = styled.section`
  flex: 1;
  background-color: #ebeeff;
  height: 100vh;
  position: relative;
`;

const Character = styled.img`
  position: absolute;
  bottom: 0px;
  right: -184px;
`;
export default WelcomeContainer;
