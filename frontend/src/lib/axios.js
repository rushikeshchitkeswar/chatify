import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatify-1-5etz.onrender.com/api",
  withCredentials: true,
});
