import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const getAllServices = async () =>
  api.get(`/Service`);


export const getServicesWithFilters = async (filters) =>
  api.post(`/Service/search`, filters);
