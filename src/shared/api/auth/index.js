import axios from "axios";
import { getUserByToken } from "../user";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const signIn = async (dataAccount) =>{
  const auth = await api.post(`/auth`, {id: '', ...dataAccount})
  const user = await getUserByToken(auth.data.token);
  return {...auth.data, id: user.data.id};
};

