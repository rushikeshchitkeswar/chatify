import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chatify-1-5etz.onrender.com/api"
      : "/api",
  withCredentials: true,
});
