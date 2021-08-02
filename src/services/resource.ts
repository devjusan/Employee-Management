import axios from "axios";
const BASE_URL =
  "https://crudcrud.com/api/1cb14ff361684e05af16999e809c1675/data";

interface ICreateUser {
  birth: string;
  name: string;
  role: string;
  salary: number | string;
  secondName: string;
}

const createUser = async (data: ICreateUser) => {
  return await axios.post(BASE_URL, data);
};

const getUsers = async () => {
  return await axios.get(BASE_URL);
};

export default { createUser, getUsers };
