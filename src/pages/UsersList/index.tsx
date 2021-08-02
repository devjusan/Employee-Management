import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import PopUp from "../../components/PopUp";
import resource from "../../services/resource";

const UserList = () => {
  const history = useHistory();
  const getBack = (to: string) => history.push(to);
  const users = ["Renato", "Gabriel", "Regina", "Stephanie", "Junior"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [show, setShow] = React.useState({
    position: 0,
    value: false,
  });

  const handlePopUp = (position: number, value: boolean) => {
    setShow({ position, value });
  };

  const getUsers = async () => {
    const { data } = await resource.getUsers();
    return data;
  };

  React.useEffect(() => {
    console.log(getUsers());
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Funcionários</S.Title>
      <S.Content>
        {users.map((item, key) => {
          return (
            <S.User
              onMouseEnter={() => handlePopUp(key, true)}
              onMouseLeave={() => handlePopUp(key, false)}
              key={`${key}${item}`}
            >
              {item}
              <PopUp open={show.position === key && show.value}>{item}</PopUp>
            </S.User>
          );
        })}
      </S.Content>
      <Button onClick={() => getBack("/")}>voltar</Button>
    </S.Wrapper>
  );
};

export default UserList;
