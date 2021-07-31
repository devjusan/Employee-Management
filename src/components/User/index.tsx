import React from "react";
import Formatter from "../../utils/formatMoney";
import * as S from "./styles";
type UserProps = {
  name: string;
  secundaryName: string;
  salary: number;
  birth: string;
  role: string;
};

const User: React.FC<UserProps> = ({
  birth = "02/16/1998",
  name = "Valmir",
  role = "Programador",
  salary = 3000,
  secundaryName = "Batista",
}) => {
  return (
    <S.Wrapper>
      <S.Name>
        {name} {secundaryName}
      </S.Name>
      <S.SmallContainer>
        <S.Salary>Salário: {Formatter(salary)}</S.Salary>
        <S.Birth>Nascimento {birth}</S.Birth>
      </S.SmallContainer>
      <S.Role>{role}</S.Role>
    </S.Wrapper>
  );
};

export default User;
