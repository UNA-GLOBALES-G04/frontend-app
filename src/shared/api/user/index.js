import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const signUp = async (dataAccount) =>{
  const { userInfo, authInfo } = dataAccount;

  const { data } = await api.post(`/auth/register`, {id: '', ...authInfo})
  await api.post(`/Userprofile/profile/user`, {id: '', ...userInfo}, {headers: {Authorization: `Bearer ${data.token}`}})

};

export const updateUser = async (userInfo, token) =>{

  await api.post(`/Userprofile/profile/user`, {id: '', ...userInfo}, {headers: {Authorization: `Bearer ${token}`}})

};

