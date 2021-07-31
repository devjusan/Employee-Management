import AsideMenu from "../AsideMenu";
import * as S from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topic from "../Topic";
import NewUser from "../../pages/NewUser";
import UserList from "../../pages/UsersList";

const Main: React.FC = () => (
  <S.Wrapper>
    <Router>
      <AsideMenu />
      <Switch>
        <Route exact path="/">
          <Topic
            birth="02/16/1998"
            name="Valmir"
            secundaryName="Batista"
            role="Programador"
            salary={3000}
          />
        </Route>
        <Route path="/adicionar">
          <NewUser />
        </Route>
        <Route path="/lista">
          <UserList />
        </Route>
      </Switch>
    </Router>
  </S.Wrapper>
);

export default Main;
