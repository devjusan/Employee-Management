import { api } from "./api";

interface ICreateUser {
  birth: string;
  name: string;
  role: string;
  salary: number | string;
  secondName: string;
}

const createUser = async (data: ICreateUser) => {
  const response = await api.post("", data);
  return response;
};

const getUsers = async () => {
  return api.get("").then((response) => response);
};

const deleteUser = async (id: string) => {
  return await api.delete(`/${id}`).then((response) => response);
};

const getSpecificUser = async (id: string) => {
  return api.get(`/${id}`).then((response) => response);
};
export default { createUser, getUsers, deleteUser, getSpecificUser };
