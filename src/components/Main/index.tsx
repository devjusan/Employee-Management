import AsideMenu from "../AsideMenu";
import * as S from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewUser from "../../pages/NewUser";
import UserList from "../../pages/UsersList";
import UserPage from "../../pages/UserPage";

const Main: React.FC = () => (
  <S.Wrapper>
    <Router>
      <AsideMenu />
      <Switch>
        <Route exact path="/">
          <NewUser />
        </Route>
        <Route path="/lista">
          <UserList />
        </Route>
        <Route path="/usuario/:type">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  </S.Wrapper>
);

export default Main;
