import axios, { AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.HOST_NAME_API,
  headers: {
    accept: "application/json",
  },
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.headers = {
    Authorization: ``,
  };
  return config;
});

export default axiosClient;
