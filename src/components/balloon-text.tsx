import styled from "styled-components";

function BalloonText() {
  return (
    <Balloon>
      스마트한 선생님을 위한 <br />
      스마트한 청소년 위기관리 솔루션 <br />
      <div>
        <MainColor>상냥이</MainColor>에 오신 것을 환영합니다!
      </div>
    </Balloon>
  );
}

const Balloon = styled.div`
  background-color: white;
  top: 160px;
  left: 104px;
  border-radius: 20px;
  width: 510px;
  height: 202px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 41px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.border_01};
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 86%;
    border-top: 24px solid white;
    border-left: 24px solid transparent;
  }
`;

const MainColor = styled.span`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 700;
  line-height: 41.6px;
  letter-spacing: -0.05em;
`;

export default BalloonText;
