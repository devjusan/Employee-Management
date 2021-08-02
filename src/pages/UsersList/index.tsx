import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import PopUp from "../../components/PopUp";
import resource from "../../services/resource";
import { ReactComponent as Delete } from "../../assets/delete.svg";

const UserList = () => {
  const history = useHistory();
  const getBack = (to: string) => history.push(to);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [usersData, setUsersData] = React.useState<any>();
  const [show, setShow] = React.useState({
    position: 0,
    value: false,
  });

  const handlePopUp = (position: number, value: boolean) => {
    setShow({ position, value });
  };

  const handleDelete = async (id: string) => {
    try {
      await resource.deleteUser(id);
    } catch (er) {
      console.log(er);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await resource.getUsers();
      setUsersData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePage = (id: string) => {
    getBack(`/usuario/${id}`);
  };

  React.useEffect(() => {
    async function getData() {
      await getUsers();
    }
    getData();
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Funcionários</S.Title>
      <S.Content>
        {usersData ? (
          usersData.map(
            (
              item: {
                birth: string;
                name: string;
                role: string;
                salary: string | number;
                secondName: string;
                _id: string;
              },
              key: number
            ) => {
              return (
                <S.User
                  onMouseEnter={() => handlePopUp(key, true)}
                  onMouseLeave={() => handlePopUp(key, false)}
                  key={`${key}${item}`}
                >
                  {item.name}
                  <PopUp
                    onClick={() => handlePage(item._id)}
                    open={show.position === key && show.value}
                  >
                    <p>Sobrenome: {item.secondName}</p>
                    <p>Salário: {item.salary}</p>
                    <p>Clique no balão para saber mais</p>
                  </PopUp>
                  <Delete
                    style={{
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                      marginLeft: "8px",
                    }}
                    onClick={() => handleDelete(item._id)}
                  />
                </S.User>
              );
            }
          )
        ) : (
          <S.User>Não há nada aqui</S.User>
        )}
      </S.Content>
      <Button onClick={() => getBack("/")}>voltar</Button>
    </S.Wrapper>
  );
};

export default UserList;
