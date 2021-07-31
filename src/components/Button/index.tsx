import React from "react";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  marginTop?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  marginTop,
  width,
  children,
  ...rest
}) => {
  return (
    <S.Container
      style={{
        marginTop: typeof marginTop === "string" ? marginTop : `${marginTop}px`,
        width: typeof width === "string" ? width : `${width}px`,
      }}
      {...rest}
    >
      {children}
    </S.Container>
  );
};

export default Button;
