import styled from "styled-components";
import { depths } from "../lib/styles";

interface InnerStyled {
  width: `${number}px` | `${number}%`;
  height: `${number}px` | `${number}%`;
}

interface TemplateProps extends InnerStyled {
  children: React.ReactNode;
  onToggleModal: () => void;
}

function BottomSheetTemplate({
  width,
  height,
  children,
  onToggleModal,
  ...rest
}: TemplateProps) {
  return (
    <TemplateBlock onMouseDown={onToggleModal} {...rest}>
      <Inner
        width={width}
        height={height}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </Inner>
      <Background />
    </TemplateBlock>
  );
}

const TemplateBlock = styled.div`
  /* position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0; */
  z-index: ${depths.modal};
`;

const Inner = styled.div<InnerStyled>`
  position: absolute;
  z-index: ${depths.modal};
  background-color: white;
  bottom: 0;
  margin: auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 24px 24px 0px 0px;
`;

const Background = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.4;
`;

export default BottomSheetTemplate;
