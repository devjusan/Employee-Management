import React from "react";
import Main from "../components/Main";
import * as S from "./styles";
import Employee from "../assets/employee.svg";

const App = () => {
  return (
    <S.Wrapper>
      <Main />
      <S.Svg>
        <img
          src={Employee}
          alt="Homem sentado em cima da mesa de um computador"
        />
      </S.Svg>
    </S.Wrapper>
  );
};

export default App;
