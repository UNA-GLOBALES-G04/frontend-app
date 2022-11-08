import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const getAllServices = async () =>
  api.get(`/Service`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJqdGkiOiIzMTcxMmUzMC0xYWM4LTQyNTgtYmQ1ZC04NmI0ZDg1ZjhmNmQiLCJuYmYiOjE2NjcxNzk4MzQsImV4cCI6MTY2NzE4MDEzNCwiaWF0IjoxNjY3MTc5ODM0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdC8ifQ.nRnDiuOd6WmRm_ZRIr5239w7YxzeUU2yIP5kY6hFCGekLm_xW0_FGWQbL4R59L7-On-69LzE6JCuxeKCk4tftA',
    },
  });

