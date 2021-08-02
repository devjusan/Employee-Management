import React from "react";
import Topic from "../../components/Topic";
import resource from "../../services/resource";
import * as S from "./styles";
import { useLocation } from "react-router-dom";

type IUser = {
  birth: string;
  name: string;
  role: string;
  salary: string | number;
  secondName: string;
  _id: string;
};

const UserPage: React.FC = () => {
  const [userData, setUserData] = React.useState<IUser>({
    birth: "",
    name: "",
    role: "",
    salary: "",
    secondName: "",
    _id: "",
  });
  const location = useLocation();
  const user = async (id: string) => {
    const { data } = await resource.getSpecificUser(id);
    return data;
  };

  React.useEffect(() => {
    const handleData = async () => {
      const path = location.pathname.replace("/usuario/", "");
      const validData = await user(path);
      setUserData(validData);
    };
    handleData();
  }, [location.pathname]);

  return (
    <S.Wrapper>
      <Topic
        birth={userData.birth}
        name={userData.name}
        role={userData.role}
        salary={Number(userData.salary)}
        secundaryName={userData.secondName}
      />
    </S.Wrapper>
  );
};

export default UserPage;
