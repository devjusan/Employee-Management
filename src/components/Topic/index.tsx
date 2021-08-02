import React from "react";
import * as S from "./styles";
import User from "../User";
import Stats from "../../assets/stats.svg";
import Button from "../Button";
import { useHistory } from "react-router-dom";

type UserProps = {
  name: string;
  secundaryName: string;
  salary: number;
  birth: string;
  role: string;
};

const Topic: React.FC<UserProps> = ({
  birth,
  name,
  role,
  salary,
  secundaryName,
}) => {
  const history = useHistory();
  const getBack = () => history.push("/");

  return (
    <S.Content>
      <S.Title>Overview</S.Title>
      <S.UserStyle>
        {" "}
        <User
          birth={birth}
          name={name}
          secundaryName={secundaryName}
          role={role}
          salary={salary}
        />
        <img src={Stats} alt="Homem mostrando dados estatísticos" />
      </S.UserStyle>
      <Button onClick={getBack}>Voltar</Button>
    </S.Content>
  );
};

export default Topic;
