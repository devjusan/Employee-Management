/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import resource from "../../services/resource";

const NewUser: React.FC = () => {
  const [errors, setErrors] = React.useState({
    birth: false,
    name: false,
    role: false,
    salary: false,
    secondName: false,
  });

  const [form, setForm] = React.useState({
    birth: "",
    name: "",
    role: "",
    salary: "",
    secondName: "",
  });

  const handleForm = (handler: string, option: any) => {
    let value = option?.target?.value;
    if (!value) value = "";
    setForm((state) => ({ ...state, [handler]: value }));
  };

  const verifyForm = (cause: any) => {
    try {
      Object.entries(cause).map((item) => {
        if (item[1] === "") {
          setErrors((state) => ({ ...state, [item[0]]: true }));
        } else {
          setErrors((state) => ({ ...state, [item[0]]: false }));
        }
      });
    } catch (error) {
      console.log("Ocorreu um erro: ", error);
    }
  };

  const handleData = async () => {
    verifyForm(form);
    const findValid = Object.entries(errors).map((item) => item[1] === false);
    const isValid = findValid.some((item) => item === false);
    try {
      if (isValid) {
        await resource.createUser(form);
      } else {
        console.log("else");
      }
    } catch (er) {
      console.log("Ops, ocorreu um erro: ", er);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>Adicionar</S.Title>
      <S.Content>
        <Input
          onChange={(option) => handleForm("name", option)}
          value={form.name ?? ""}
          name="Nome"
          inputError={errors.name}
        />
        <Input
          onChange={(option) => handleForm("secondName", option)}
          value={form.secondName ?? ""}
          name="Sobrenome"
          inputError={errors.secondName}
        />
        <Input
          onChange={(option) => handleForm("role", option)}
          value={form.role ?? ""}
          name="Cargo"
          inputError={errors.role}
        />
        <Input
          onChange={(option) => handleForm("birth", option)}
          value={form.birth ?? ""}
          name="Data de nascimento"
          inputError={errors.birth}
        />
        <Input
          onChange={(option) => handleForm("salary", option)}
          value={form.salary ?? ""}
          name="Salário"
          inputError={errors.salary}
        />
        <Button marginTop="25px" onClick={() => handleData()}>
          confirmar dados
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default NewUser;
