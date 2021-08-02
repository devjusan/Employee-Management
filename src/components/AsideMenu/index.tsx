import React from "react";
import * as S from "./styles";
import Plus from "../../assets/plus.svg";
import User from "../../assets/user.svg";
import { Link } from "react-router-dom";
const AsideMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Link to="/">
          <li>
            <img src={Plus} alt="Botão para adicionar novo funcionário" />
          </li>
        </Link>
        <Link to="/lista">
          <li>
            <img src={User} alt="Botão para ver a lista de usuários" />
          </li>
        </Link>
      </S.Menu>
    </S.Wrapper>
  );
};

export default AsideMenu;
