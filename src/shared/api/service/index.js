import axios from "axios";
<<<<<<< HEAD
=======
import { getUserByToken } from "../user";
>>>>>>> create-service

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const getAllServices = async () =>
  api.get(`/Service`);


export const getServicesWithFilters = async (filters) =>
  api.post(`/Service/search`, filters);
<<<<<<< HEAD
=======

export const getServiceById = async (id) =>
  api.get(`/Service/id/${id}`);

export const getRatingByServiceId = async (id) =>
  api.get(`/Service/id/${id}/rating`);

export const createService = async (service, token) =>{
  const user = await getUserByToken(token);
  api.post(`/Service`, {id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', userProfileId: user.data.id,...service}, {headers : {Authorization: `Bearer ${token}`}});
}
>>>>>>> create-service
