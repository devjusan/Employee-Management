/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import resource from "../../services/resource";

type IForm = {
  birth: string;
  name: string;
  role: string;
  salary: string;
  secondName: string;
};

const NewUser: React.FC = () => {
  const [errors, setErrors] = React.useState({
    birth: false,
    name: false,
    role: false,
    salary: false,
    secondName: false,
  });

  const [form, setForm] = React.useState<IForm>({
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

  const verifyForm = (cause: IForm) => {
    try {
      Object.entries(cause).map(([key, value]) => {
        if (value === "" || value.length === 0) {
          setErrors((state) => ({ ...state, [key]: true }));
        } else {
          setErrors((state) => ({ ...state, [key]: false }));
        }
      });
      console.log(errors);
    } catch (error) {
      console.log("Ocorreu um erro: ", error);
    }
  };

  const passWithNoErrors = () => {
    const test = Object.entries(errors).every(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([key, value]) => value === false
    );
    return test;
  };

  const handleData = async () => {
    const isValid = passWithNoErrors();
    try {
      // eslint-disable-next-line no-constant-condition
      if (isValid) {
        await resource.createUser(form);
      } else {
        console.log("else");
      }
    } catch (er) {
      console.log("Ops, ocorreu um erro: ", er);
    }
  };

  React.useEffect(() => {
    verifyForm(form);
  }, [form]);

  return (
    <S.Wrapper>
      <S.Title>Adicionar</S.Title>
      <S.Content>
        <Input
          onChange={(option) => handleForm("name", option)}
          value={form.name ?? ""}
          name="Nome"
          inputError={{ value: errors.name, message: "Campo obrigatório" }}
        />
        <Input
          onChange={(option) => handleForm("secondName", option)}
          value={form.secondName ?? ""}
          name="Sobrenome"
          inputError={{
            value: errors.secondName,
            message: "Campo obrigatório",
          }}
        />
        <Input
          onChange={(option) => handleForm("role", option)}
          value={form.role ?? ""}
          name="Cargo"
          inputError={{
            value: errors.role,
            message: "Campo obrigatório",
          }}
        />
        <Input
          onChange={(option) => handleForm("birth", option)}
          value={form.birth ?? ""}
          name="dd/mm/yy"
          maxLength={10}
          inputError={
            form.birth.match(
              /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
            )
              ? {
                  value: errors.birth,
                  message: "Campo obrigatório",
                }
              : { value: true, message: "Data inválida" }
          }
        />
        <Input
          onChange={(option) => handleForm("salary", option)}
          value={String(form.salary) ?? ""}
          name="Salário"
          min="1"
          type="number"
          inputError={
            Number(form.salary) < 0
              ? { value: true, message: "O valor não pode ser negativo" }
              : {
                  value: errors.salary,
                  message: "Campo obrigatório",
                }
          }
        />
        <Button marginTop="25px" onClick={() => handleData()}>
          confirmar dados
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default NewUser;
