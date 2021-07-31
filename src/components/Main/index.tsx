import User from "../User";
import AsideMenu from "../AsideMenu";
import * as S from "./styles";
import Stats from "../../assets/stats.svg";

const Main: React.FC = () => (
  <S.Wrapper>
    <AsideMenu />
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
  </S.Wrapper>
);

export default Main;
