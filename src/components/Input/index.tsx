/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  inputError: boolean;
  name: string;
  onChange: (arg: never) => any;
}

const Input: React.FC<InputProps> = ({
  onChange,
  name,
  value,
  inputError,
  ...rest
}) => {
  const [error, setError] = React.useState(inputError);
  const [inputValue, setInputValue] = React.useState(value);

  React.useEffect(() => {
    if (inputValue === null) setInputValue("");
  }, [inputValue]);

  React.useEffect(() => {
    setError(inputError);
  }, [inputError]);

  return (
    <S.Container>
      <S.Input
        placeholder={name}
        type="text"
        {...rest}
        onChange={onChange}
        value={value}
      />
      <S.Error>{error ? "Campo obrigatório" : ""}</S.Error>
    </S.Container>
  );
};

export default Input;
