import AsideMenu from "../AsideMenu";
import * as S from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topic from "../Topic";
import NewUser from "../../pages/NewUser";

const Main: React.FC = () => (
  <S.Wrapper>
    <Router>
      <AsideMenu />
      <Switch>
        <Route exact path="/">
          <Topic />
        </Route>
        <Route path="/adicionar">
          <NewUser />
        </Route>
      </Switch>
    </Router>
  </S.Wrapper>
);

export default Main;
