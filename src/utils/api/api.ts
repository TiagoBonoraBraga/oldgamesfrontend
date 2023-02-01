import axios from "axios";
import {
  CreateGameRequest,
  CreateProfileRequest,
  LoginRequest,
  UpdateGameRequest,
} from "../types/requests";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
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

  //crud games
  getGames: async () => {
    try {
      const response = await axios.get("/game");
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getGameById: async (id: string) => {
    try {
      const response = await axios.get(`/game/${id}`);
      if (!response.data) {
        throw new Error("game não encontrado");
      }
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

  updateGame: async (payload: UpdateGameRequest) => {
    try {
      const response = await axios.patch("/game/" + payload.id, payload);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  deleteGame: async (payload: string) => {
    try {
      const response = await axios.delete(`/game/${payload}`);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  //Crud Users

  createNewProfile: async (payload: CreateProfileRequest) => {
    try {
      console.log(payload)
      const response = await axios.post("/profile", payload);
      console.log(`api: ${response}`)
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
  getProfile: async (id: string | null) => {
    try {
      console.log(id)
      const response = await axios.get("/profile/" + id);
      console.log(response)
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

};
