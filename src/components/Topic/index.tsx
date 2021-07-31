import React from "react";
import * as S from "./styles";
import User from "../User";
import Stats from "../../assets/stats.svg";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const Topic: React.FC = () => {
  const history = useHistory();
  const getBack = () => history.push("/");

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
      <Button onClick={getBack}>Voltar</Button>
    </S.Content>
  );
};

export default Topic;
