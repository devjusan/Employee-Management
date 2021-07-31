import React from "react";
import * as S from "./styles";
import User from "../User";
import Stats from "../../assets/stats.svg";

const Topic: React.FC = () => {
  return (
    <S.Content>
      <S.Title>Overview</S.Title>
      <S.UserStyle>
        {" "}
        <User
          birth="02/16/1998"
          name="Valmir"
          secundaryName="Batista"
          role="Programador"
          salary={3000}
        />
        <img src={Stats} alt="Homem mostrando dados estatísticos" />
      </S.UserStyle>
    </S.Content>
  );
};

export default Topic;
