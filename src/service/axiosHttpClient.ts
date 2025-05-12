import axios, { type AxiosInstance } from "axios";
import type { HttpClient } from "./httpClient";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = "TOKEN-TEST-AFINZ";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const axiosHttpClient: HttpClient = {
  get: (url, config) => axiosInstance.get(url, config).then((res) => res.data),
  post: (url, data, config) => axiosInstance.post(url, data, config).then((res) => res.data),
  put: (url, data, config) => axiosInstance.put(url, data, config).then((res) => res.data),
  delete: (url, config) => axiosInstance.delete(url, config).then((res) => res.data),
};