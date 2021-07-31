import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  onChange: (arg: never) => never;
}

const Input: React.FC<InputProps> = ({ name, onChange, value, ...rest }) => {
  const [inputValue, setInputValue] = React.useState(value);

  React.useEffect(() => {
    if (inputValue === null) setInputValue("");
  }, [inputValue]);

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder={name}
        {...rest}
        onChange={onChange}
        value={value}
      />
    </S.Container>
  );
};

export default Input;
