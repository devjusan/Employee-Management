import React from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input/styles";
import * as S from "./styles";

const NewUser: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Adicionar</S.Title>
      <S.Content>
        <Input placeholder="Nome" />
        <Input placeholder="Sobrenome" />
        <Input placeholder="Cargo" />
        <Input placeholder="Data de nascimento" />
        <Input placeholder="Salário" />
        <Button marginTop="25px">confirmar dados</Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default NewUser;
