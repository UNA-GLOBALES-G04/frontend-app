import axios from "axios";
import { getUserByToken } from "../user";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const createOrder = async (order, token) =>{
  const user = await getUserByToken(token);
  return api.post(`/Order`, {id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', userProfileId: user.data.id, current_status: "PENDING", rating: 0, ...order}, {headers: {Authorization: `Bearer ${token}`}});
}

export const acceptOrder = async (orderInfo, token) =>{
  return api.post(`/Order/${orderInfo.serviceId}/${orderInfo.orderId}/accept`, null , {headers : {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}});
}

export const completeOrder = async (orderInfo, token) =>{
  return api.post(`/Order/${orderInfo.serviceId}/${orderInfo.orderId}/complete`, null , {headers : {Authorization: `Bearer ${token}`}});
}

export const cancelOrder = async (orderInfo, token) =>{
  return api.delete(`/Order/id/${orderInfo.orderId}/cancel`, {headers : {Authorization: `Bearer ${token}`}});
}

export const rejectOrder = async (orderInfo, token) =>{
  return api.delete(`/Order/id/${orderInfo.orderId}/reject`, {headers : {Authorization: `Bearer ${token}`, "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"}});
}

export const getMyOrdersVendor = async (token, status) =>{
  return api.get(`/Order/vendor/MyOrders`, {headers : {Authorization: `Bearer ${token}`}, params: {status: status}});
}

export const getMyOrders = async (token) =>{
  return api.get(`/Order/MyOrders`, {headers : {Authorization: `Bearer ${token}`}});
}


