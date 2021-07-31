import React from "react";
import * as S from "./styles";
import Plus from "../../assets/plus.svg";
import { ReactComponent as Circle } from "../../assets/circle.svg";

const AsideMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <img src={Plus} alt="Botão para adicionar novo funcionário" />
      </S.Menu>
      <S.SVG style={{ width: "30px", height: "30px" }}>
        <Circle />
      </S.SVG>
    </S.Wrapper>
  );
};

export default AsideMenu;
