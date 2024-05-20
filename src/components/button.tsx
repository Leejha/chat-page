import React from "react";

import styled, { css } from "styled-components";

interface ButtonStyledProps {
  /**
   * 버튼 가로 길이
   */
  width?: `${number}px` | `${number}%`;
  /**
   * 버튼 세로 길이
   */
  height?: `${number}px` | `${number}%`;
  /**
   * 버튼 둥글기
   */
  radius?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyledProps {
  children: React.ReactNode;
}

function Button({
  width,
  height,
  radius = "8px",
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyled width={width} height={height} radius={radius} {...rest}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme, width, height, radius }) => css`
    background-color: ${theme.colors.main};
    width: ${width};
    height: ${height};
    border-radius: ${radius};
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  `}
`;

export default Button;
