import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const signIn = async (dataAccount) =>
  api.post(`/auth`, {id: '', ...dataAccount});

