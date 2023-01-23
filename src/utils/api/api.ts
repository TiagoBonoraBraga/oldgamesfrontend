import axios from "axios";
import { CreateGameRequest, LoginRequest } from "../types/requests";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
  }
);
export const api = {
  login: async ({ Email, Password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", {
        Email,
        Password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  getGames: async () => {
    try {
      const response = await axios.get("/game");
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  createNewGame: async (payload: CreateGameRequest) => {
    try {
      const response = await axios.post("/game", payload);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  updateGame: async (payload: CreateGameRequest) => {
    try {
      const response = await axios.patch("/game/{id}", payload);
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
};
